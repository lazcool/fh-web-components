// js components were originally snaffled from https://github.com/alphagov/govuk-design-system/blob/main/src/javascripts/components/
import CookieBanner from './components/cookie-banner';
import CookiesPage from './components/cookies-page';
import initAnalytics from './components/analytics';
import initClarity from './components/clarity';
import { initializeAddAnother } from './components/add-another';
import { initializeAutocompletes } from './components/autocomplete';
import { initializeBackButtons } from './components/back-links';
import { initializeVisibilityToggles } from './components/visibility-toggle';
import { OpenCloseButton } from './components/open-close-button';
//todo: consistency in module/proto/class style
window.FamilyHubsFrontend = window.FamilyHubsFrontend || {};
window.FamilyHubsFrontend.initAll = () => {
    // Initialise cookie banner
    const $cookieBanner = document.querySelector('[data-module="govuk-cookie-banner"]');
    new CookieBanner($cookieBanner).init();
    initAnalytics(window.GA_MEASUREMENT_ID);
    initClarity(window.CLARITY_ID);
    //todo: move this into scripts section on cookie page
    // Initialise cookie page
    var $cookiesPage = document.querySelector('[data-module="fh-cookies-page"]');
    new CookiesPage($cookiesPage).init();
    initializeBackButtons();
    initializeVisibilityToggles();
    //todo: ordering between these two?
    initializeAddAnother();
    initializeAutocompletes();
    // initialise open close buttons
    let openCloseButtons = document.querySelectorAll('button[data-open-close-mobile]');
    openCloseButtons === null || openCloseButtons === void 0 ? void 0 : openCloseButtons.forEach((openCloseButton) => {
        new OpenCloseButton(openCloseButton);
    });
};
//todo: do we want to do this...
//document.addEventListener("DOMContentLoaded", function () {
window.GOVUKFrontend.initAll();
window.MOJFrontend.initAll();
window.FamilyHubsFrontend.initAll();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseWh1YnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0lBQW9JO0FBc0JwSSxPQUFPLFlBQVksTUFBTSw0QkFBNEIsQ0FBQTtBQUNyRCxPQUFPLFdBQVcsTUFBTSwyQkFBMkIsQ0FBQTtBQUNuRCxPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFakUsK0NBQStDO0FBRS9DLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDO0FBQzVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBRXJDLDJCQUEyQjtJQUMzQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUF1QixDQUFDO0lBQzFHLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXZDLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRS9CLHFEQUFxRDtJQUNyRCx5QkFBeUI7SUFDekIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzdFLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXJDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsMkJBQTJCLEVBQUUsQ0FBQztJQUM5QixtQ0FBbUM7SUFDbkMsb0JBQW9CLEVBQUUsQ0FBQztJQUN2Qix1QkFBdUIsRUFBRSxDQUFDO0lBRTFCLGdDQUFnQztJQUNoQyxJQUFJLGdCQUFnQixHQUFrQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNsSCxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtRQUMxQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLGdDQUFnQztBQUNoQyw2REFBNkQ7QUFFN0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJmYW1pbHlodWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8ganMgY29tcG9uZW50cyB3ZXJlIG9yaWdpbmFsbHkgc25hZmZsZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWxwaGFnb3YvZ292dWstZGVzaWduLXN5c3RlbS9ibG9iL21haW4vc3JjL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvXHJcblxyXG4vL3RvZG86IHN3YXAgdG8gYSBjb21wb25lbnRzIGZvbGRlcj9cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIEdEU19DT05TRU5UX0NPT0tJRV9WRVJTSU9OOiBudW1iZXI7XHJcbiAgICAgICAgR0FfTUVBU1VSRU1FTlRfSUQ6IHN0cmluZztcclxuICAgICAgICBHQV9DT05UQUlORVJfSUQ6IHN0cmluZztcclxuICAgICAgICBHQV9DT09LSUVfTkFNRTogc3RyaW5nO1xyXG4gICAgICAgIENMQVJJVFlfSUQ6IHN0cmluZztcclxuICAgICAgICBkYXRhTGF5ZXI6IGFueVtdO1xyXG4gICAgICAgIEZhbWlseUh1YnNGcm9udGVuZDogYW55O1xyXG4gICAgICAgIEdPVlVLRnJvbnRlbmQ6IHtcclxuICAgICAgICAgICAgaW5pdEFsbDogKCkgPT4gdm9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgTU9KRnJvbnRlbmQ6IHtcclxuICAgICAgICAgICAgaW5pdEFsbDogKCkgPT4gdm9pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmltcG9ydCBDb29raWVCYW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL2Nvb2tpZS1iYW5uZXInXHJcbmltcG9ydCBDb29raWVzUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvY29va2llcy1wYWdlJ1xyXG5pbXBvcnQgaW5pdEFuYWx5dGljcyBmcm9tICcuL2NvbXBvbmVudHMvYW5hbHl0aWNzJztcclxuaW1wb3J0IGluaXRDbGFyaXR5IGZyb20gJy4vY29tcG9uZW50cy9jbGFyaXR5JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFkZEFub3RoZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLWFub3RoZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXV0b2NvbXBsZXRlcyB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQmFja0J1dHRvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFjay1saW5rcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVWaXNpYmlsaXR5VG9nZ2xlcyB9IGZyb20gJy4vY29tcG9uZW50cy92aXNpYmlsaXR5LXRvZ2dsZSc7XHJcbmltcG9ydCB7IE9wZW5DbG9zZUJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9vcGVuLWNsb3NlLWJ1dHRvbic7XHJcblxyXG4vL3RvZG86IGNvbnNpc3RlbmN5IGluIG1vZHVsZS9wcm90by9jbGFzcyBzdHlsZVxyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZCA9IHdpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQgfHwge307XHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuaW5pdEFsbCA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlIGNvb2tpZSBiYW5uZXJcclxuICAgIGNvbnN0ICRjb29raWVCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2R1bGU9XCJnb3Z1ay1jb29raWUtYmFubmVyXCJdJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbmV3IENvb2tpZUJhbm5lcigkY29va2llQmFubmVyKS5pbml0KCk7XHJcblxyXG4gICAgaW5pdEFuYWx5dGljcyh3aW5kb3cuR0FfTUVBU1VSRU1FTlRfSUQpO1xyXG4gICAgaW5pdENsYXJpdHkod2luZG93LkNMQVJJVFlfSUQpO1xyXG5cclxuICAgIC8vdG9kbzogbW92ZSB0aGlzIGludG8gc2NyaXB0cyBzZWN0aW9uIG9uIGNvb2tpZSBwYWdlXHJcbiAgICAvLyBJbml0aWFsaXNlIGNvb2tpZSBwYWdlXHJcbiAgICB2YXIgJGNvb2tpZXNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kdWxlPVwiZmgtY29va2llcy1wYWdlXCJdJyk7XHJcbiAgICBuZXcgQ29va2llc1BhZ2UoJGNvb2tpZXNQYWdlKS5pbml0KCk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZUJhY2tCdXR0b25zKCk7XHJcbiAgICBpbml0aWFsaXplVmlzaWJpbGl0eVRvZ2dsZXMoKTtcclxuICAgIC8vdG9kbzogb3JkZXJpbmcgYmV0d2VlbiB0aGVzZSB0d28/XHJcbiAgICBpbml0aWFsaXplQWRkQW5vdGhlcigpO1xyXG4gICAgaW5pdGlhbGl6ZUF1dG9jb21wbGV0ZXMoKTtcclxuXHJcbiAgICAvLyBpbml0aWFsaXNlIG9wZW4gY2xvc2UgYnV0dG9uc1xyXG4gICAgbGV0IG9wZW5DbG9zZUJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtb3Blbi1jbG9zZS1tb2JpbGVdJyk7XHJcbiAgICBvcGVuQ2xvc2VCdXR0b25zPy5mb3JFYWNoKChvcGVuQ2xvc2VCdXR0b24pID0+IHtcclxuICAgICAgICBuZXcgT3BlbkNsb3NlQnV0dG9uKG9wZW5DbG9zZUJ1dHRvbik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vdG9kbzogZG8gd2Ugd2FudCB0byBkbyB0aGlzLi4uXHJcbi8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxud2luZG93LkdPVlVLRnJvbnRlbmQuaW5pdEFsbCgpO1xyXG53aW5kb3cuTU9KRnJvbnRlbmQuaW5pdEFsbCgpO1xyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLmluaXRBbGwoKTtcclxuIl19
