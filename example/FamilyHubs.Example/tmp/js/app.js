//todo: could do most of this from supplying an attribute to id the appropriate selects
// then we could remove all the hacks
function setupAutocompleteWhenAddAnother(element) {
    if (!(element instanceof HTMLElement)) {
        return;
    }
    const languageSelects = element.querySelectorAll("[id^='language-']"); // [id$='\\d+']");
    languageSelects.forEach(function (select) {
        accessibleAutocomplete.enhanceSelectElement({
            name: 'languageName',
            defaultValue: '',
            selectElement: select
        });
    });
}
//todo: this is a hack - we want setupAutocompleteWhenAddAnother to be in the generated js file.
// if we export it, it includes the export keyword in the generated js file
// (but we use export in the other ts files, without the js containing export!)
// so as a workaround we call it where it no-ops
setupAutocompleteWhenAddAnother(null);
//});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx1RkFBdUY7QUFDdkYscUNBQXFDO0FBQ3JDLFNBQVMsK0JBQStCLENBQUMsT0FBb0I7SUFFekQsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDcEMsT0FBTztJQUNYLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQWtDLENBQUMsQ0FBQyxrQkFBa0I7SUFFMUgsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU07UUFDcEMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUM7WUFDeEMsSUFBSSxFQUFFLGNBQWM7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLE1BQU07U0FDeEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsZ0dBQWdHO0FBQ2hHLDJFQUEyRTtBQUMzRSwrRUFBK0U7QUFDL0UsZ0RBQWdEO0FBQ2hELCtCQUErQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLEtBQUsiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBhY2Nlc3NpYmxlQXV0b2NvbXBsZXRlOiBhbnk7XHJcblxyXG4vL3RvZG86IGNvdWxkIGRvIG1vc3Qgb2YgdGhpcyBmcm9tIHN1cHBseWluZyBhbiBhdHRyaWJ1dGUgdG8gaWQgdGhlIGFwcHJvcHJpYXRlIHNlbGVjdHNcclxuLy8gdGhlbiB3ZSBjb3VsZCByZW1vdmUgYWxsIHRoZSBoYWNrc1xyXG5mdW5jdGlvbiBzZXR1cEF1dG9jb21wbGV0ZVdoZW5BZGRBbm90aGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYW5ndWFnZVNlbGVjdHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRePSdsYW5ndWFnZS0nXVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxTZWxlY3RFbGVtZW50PjsgLy8gW2lkJD0nXFxcXGQrJ11cIik7XHJcblxyXG4gICAgbGFuZ3VhZ2VTZWxlY3RzLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdCkge1xyXG4gICAgICAgIGFjY2Vzc2libGVBdXRvY29tcGxldGUuZW5oYW5jZVNlbGVjdEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBuYW1lOiAnbGFuZ3VhZ2VOYW1lJyxcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgc2VsZWN0RWxlbWVudDogc2VsZWN0XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL3RvZG86IHRoaXMgaXMgYSBoYWNrIC0gd2Ugd2FudCBzZXR1cEF1dG9jb21wbGV0ZVdoZW5BZGRBbm90aGVyIHRvIGJlIGluIHRoZSBnZW5lcmF0ZWQganMgZmlsZS5cclxuLy8gaWYgd2UgZXhwb3J0IGl0LCBpdCBpbmNsdWRlcyB0aGUgZXhwb3J0IGtleXdvcmQgaW4gdGhlIGdlbmVyYXRlZCBqcyBmaWxlXHJcbi8vIChidXQgd2UgdXNlIGV4cG9ydCBpbiB0aGUgb3RoZXIgdHMgZmlsZXMsIHdpdGhvdXQgdGhlIGpzIGNvbnRhaW5pbmcgZXhwb3J0ISlcclxuLy8gc28gYXMgYSB3b3JrYXJvdW5kIHdlIGNhbGwgaXQgd2hlcmUgaXQgbm8tb3BzXHJcbnNldHVwQXV0b2NvbXBsZXRlV2hlbkFkZEFub3RoZXIobnVsbCk7XHJcbi8vfSk7Il19