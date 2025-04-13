document.addEventListener("DOMContentLoaded", function () {
    // Get filter elements
    const locationFilter = document.getElementById('location');
    const categoryFilter = document.getElementById('category');
    const seasonFilter = document.getElementById('season');
    const contentTypeFilter = document.getElementById('content-type');
    const searchFilter = document.getElementById('search');
    const sortFilter = document.getElementById('sort');
    const applyFiltersBtn = document.querySelector('.btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Function to apply filters
    function applyFilters() {
        const locationValue = locationFilter.value.toLowerCase();
        const categoryValue = categoryFilter.value.toLowerCase();
        const seasonValue = seasonFilter.value.toLowerCase();
        const contentTypeValue = contentTypeFilter.value.toLowerCase();
        const searchValue = searchFilter.value.toLowerCase();
        const sortValue = sortFilter.value;

        galleryItems.forEach(item => {
            const title = item.querySelector('.gallery-title').textContent.toLowerCase();
            const location = item.dataset.location.toLowerCase();  // Corrected to use "data-location"
            const category = item.dataset.category.toLowerCase();
            const season = item.dataset.season.toLowerCase();
            const contentType = item.dataset.contentType.toLowerCase();

            // Check if the item matches the filters
            const matchesLocation = location.includes(locationValue) || locationValue === "";
            const matchesCategory = category.includes(categoryValue) || categoryValue === "";
            const matchesSeason = season.includes(seasonValue) || seasonValue === "";
            const matchesContentType = contentType.includes(contentTypeValue) || contentTypeValue === "";
            const matchesSearch = title.includes(searchValue);

            // Show or hide the gallery item based on matching filters
            if (matchesLocation && matchesCategory && matchesSeason && matchesContentType && matchesSearch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Sorting the gallery based on the selected option
        if (sortValue === "trending") {
            console.log("Sorting by Trending");
            // Add your custom sorting logic for trending here
        } else if (sortValue === "recent") {
            console.log("Sorting by Recent");
            // Add your custom sorting logic for recent here
        } else if (sortValue === "popular") {
            console.log("Sorting by Popular");
            // Add your custom sorting logic for popular here
        }
    }

    // Add event listeners
    applyFiltersBtn.addEventListener('click', applyFilters);

    // Handle changes to any filter dropdown
    locationFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    seasonFilter.addEventListener('change', applyFilters);
    contentTypeFilter.addEventListener('change', applyFilters);
    searchFilter.addEventListener('input', applyFilters);
    sortFilter.addEventListener('change', applyFilters);

    // Optional: Initialize filters with default values
    applyFilters();
});

document.addEventListener("DOMContentLoaded", () => {
    const uploadArea = document.querySelector(".upload-area");
    const browseBtn = uploadArea.querySelector("button");
    const supportedFormats = ["image/jpeg", "image/png", "video/mp4", "video/quicktime"];
    const maxFileSize = 20 * 1024 * 1024; // 20MB

    // Create an invisible input for file selection
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/jpeg,image/png,video/mp4,video/quicktime";
    fileInput.multiple = true;

    // Handle file selection via button
    browseBtn.addEventListener("click", () => {
        fileInput.click();
    });

    // Handle file selection from dialog
    fileInput.addEventListener("change", () => {
        handleFiles(fileInput.files);
    });

    // Drag & Drop Events
    uploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("ring", "ring-blue-400");
    });

    uploadArea.addEventListener("dragleave", () => {
        uploadArea.classList.remove("ring", "ring-blue-400");
    });

    uploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("ring", "ring-blue-400");
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // File Validation and Display
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (!supportedFormats.includes(file.type)) {
                alert(`Unsupported file type: ${file.name}`);
                return;
            }
            if (file.size > maxFileSize) {
                alert(`File too large (max 20MB): ${file.name}`);
                return;
            }
            // Simulate upload (You can replace this with actual upload logic)
            console.log(`Uploading: ${file.name}`);
            const successMsg = document.createElement("p");
            successMsg.textContent = `✅ Uploaded: ${file.name}`;
            successMsg.className = "mt-2 text-green-600 text-sm";
            uploadArea.appendChild(successMsg);
        });
    }
});
