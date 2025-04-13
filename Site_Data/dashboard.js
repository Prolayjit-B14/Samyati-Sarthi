        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
        
        // Initialize Charts
        document.addEventListener('DOMContentLoaded', function() {
            // Page Views Trend Chart
            const pageViewsCtx = document.getElementById('pageViewsChart').getContext('2d');
            const pageViewsChart = new Chart(pageViewsCtx, {
                type: 'line',
                data: {
                    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
                    datasets: [{
                        label: 'Page Views',
                        data: [1200, 1900, 1700, 2100, 2300, 2500, 2800],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            
            // Country Traffic Chart
            const countryTrafficCtx = document.getElementById('countryTrafficChart').getContext('2d');
            const countryTrafficChart = new Chart(countryTrafficCtx, {
                type: 'doughnut',
                data: {
                    labels: ['India', 'United States', 'United Kingdom', 'Germany', 'Australia'],
                    datasets: [{
                        data: [45, 18, 12, 8, 7],
                        backgroundColor: [
                            '#3498db',
                            '#2ecc71',
                            '#f39c12',
                            '#e74c3c',
                            '#9b59b6'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                    },
                    cutout: '70%'
                }
            });
            
            // Chart toggle buttons
            document.querySelectorAll('.chart-toggle').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.chart-toggle').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // In a real implementation, you would update the chart data here
                    // based on the selected time period or view
                });
            });
            
            // Date range selector
            document.getElementById('timePeriod').addEventListener('change', function() {
                if (this.value === 'custom') {
                    // Show custom date picker
                    alert('Custom date range selector would appear here');
                } else {
                    // Reload data for selected period
                    loadAnalyticsData(this.value);
                }
            });
            
            // Refresh button
            document.getElementById('refreshData').addEventListener('click', function() {
                const period = document.getElementById('timePeriod').value;
                loadAnalyticsData(period);
            });
            
            // Simulate loading real data
            function loadAnalyticsData(days) {
                // Show loading states
                document.querySelectorAll('.metric-value').forEach(el => {
                    el.innerHTML = '<span class="loading"></span>';
                });
                
                // Simulate API delay
                setTimeout(() => {
                    // Mock data - replace with real API calls in production
                    const mockData = {
                        totalPageViews: (24000 + Math.floor(Math.random() * 2000)).toLocaleString(),
                        uniqueVisitors: (15000 + Math.floor(Math.random() * 1000)).toLocaleString(),
                        avgSessionDuration: '2:' + (40 + Math.floor(Math.random() * 20)).toString().padStart(2, '0'),
                        bounceRate: (40 + Math.random() * 5).toFixed(1) + '%',
                        topCountry: ['India', 'United States', 'United Kingdom'][Math.floor(Math.random() * 3)],
                        deviceSplit: `Mobile ${55 + Math.floor(Math.random() * 10)}%`
                    };
                    
                    // Update the UI
                    document.getElementById('totalPageViews').textContent = mockData.totalPageViews;
                    document.getElementById('uniqueVisitors').textContent = mockData.uniqueVisitors;
                    document.getElementById('avgSessionDuration').textContent = mockData.avgSessionDuration;
                    document.getElementById('bounceRate').textContent = mockData.bounceRate;
                    document.getElementById('topCountry').textContent = mockData.topCountry;
                    document.getElementById('deviceSplit').textContent = mockData.deviceSplit;
                    
                    // Update charts with new data
                    updateCharts(days);
                    
                }, 1000);
            }
            
            function updateCharts(days) {
                // Generate random data based on days selected
                const baseValue = days === '7' ? 1000 : days === '30' ? 3000 : 9000;
                const variation = days === '7' ? 500 : days === '30' ? 1500 : 4500;
                
                const newData = Array.from({length: 7}, () => 
                    Math.floor(baseValue/7 + Math.random() * variation/7)
                );
                
                // Update page views chart
                pageViewsChart.data.datasets[0].data = newData;
                pageViewsChart.update();
                
                // In a real implementation, you would make API calls to get real data
                // and update all charts accordingly
            }
            
            // Initial load
            loadAnalyticsData('30');
        });
        
        // Track dashboard interactions
        function trackDashboardInteraction(action, label) {
            gtag('event', action, {
                'event_category': 'dashboard_interaction',
                'event_label': label
            });
        }