import { nodeListForEach } from './helpers';
export function initializeVisibilityToggles() {
    const visibilityToggles = document.querySelectorAll("[data-toggle-visibility-id]");
    nodeListForEach(visibilityToggles, (toggle) => {
        toggle.addEventListener('click', function handleClick(event) {
            let toToggleId = toggle.getAttribute("data-toggle-visibility-id");
            if (toToggleId) {
                let toToggle = document.getElementById(toToggleId);
                if (toToggle) {
                    if (toToggle.style.display === "none") {
                        toToggle.style.display = "block";
                    }
                    else {
                        toToggle.style.display = "none";
                    }
                }
            }
        });
    });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlzaWJpbGl0eS10b2dnbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUUzQyxNQUFNLFVBQVUsMkJBQTJCO0lBRXZDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDbkYsZUFBZSxDQUFDLGlCQUFpQixFQUM3QixDQUFDLE1BQW1CLEVBQUUsRUFBRTtRQUVwQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUMzQixTQUFTLFdBQVcsQ0FBQyxLQUFLO1lBRXRCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUNsRSxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLFFBQVEsRUFBRTtvQkFDVixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3FCQUNwQzt5QkFBTTt3QkFDSCxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7cUJBQ25DO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3Zpc2liaWxpdHktdG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9kZUxpc3RGb3JFYWNoIH0gZnJvbSAnLi9oZWxwZXJzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVWaXNpYmlsaXR5VG9nZ2xlcygpOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCB2aXNpYmlsaXR5VG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdmlzaWJpbGl0eS1pZF1cIik7XHJcbiAgICBub2RlTGlzdEZvckVhY2godmlzaWJpbGl0eVRvZ2dsZXMsXHJcbiAgICAgICAgKHRvZ2dsZTogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Ub2dnbGVJZCA9IHRvZ2dsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZS12aXNpYmlsaXR5LWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b1RvZ2dsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b1RvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvVG9nZ2xlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9Ub2dnbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b1RvZ2dsZS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG59Il19
