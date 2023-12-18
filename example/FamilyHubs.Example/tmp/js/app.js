//todo: first time
//could use call(), but would have to squirrel the objects away
//(window as any).FamilyHubsFrontend.AddAnother.setCallback(function (element: HTMLElement) {
function setupAutocompleteWhenAddAnother(element) {
    if (!(element instanceof HTMLElement)) {
        return;
    }
    const languageSelects = element.querySelectorAll("[id^='language-']"); // [id$='\\d+']");
    languageSelects.forEach(function (select) {
        accessibleAutocomplete.enhanceSelectElement({
            //defaultValue: select.value,
            //todo: does it default to name in html?
            //name: select.name,
            name: 'languageName',
            defaultValue: '',
            selectElement: select
        });
    });
}
setupAutocompleteWhenAddAnother(null);
//});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxrQkFBa0I7QUFDbEIsK0RBQStEO0FBQy9ELDZGQUE2RjtBQUU3RixTQUFTLCtCQUErQixDQUFDLE9BQW9CO0lBRXpELElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3BDLE9BQU87SUFDWCxDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFrQyxDQUFDLENBQUMsa0JBQWtCO0lBRTFILGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNO1FBQ3BDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDO1lBQ3hDLDZCQUE2QjtZQUM3Qix3Q0FBd0M7WUFDeEMsb0JBQW9CO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxNQUFNO1NBQ3hCLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELCtCQUErQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLEtBQUsiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBhY2Nlc3NpYmxlQXV0b2NvbXBsZXRlOiBhbnk7XHJcblxyXG4vL3RvZG86IGZpcnN0IHRpbWVcclxuLy9jb3VsZCB1c2UgY2FsbCgpLCBidXQgd291bGQgaGF2ZSB0byBzcXVpcnJlbCB0aGUgb2JqZWN0cyBhd2F5XHJcbi8vKHdpbmRvdyBhcyBhbnkpLkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyLnNldENhbGxiYWNrKGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuZnVuY3Rpb24gc2V0dXBBdXRvY29tcGxldGVXaGVuQWRkQW5vdGhlcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFuZ3VhZ2VTZWxlY3RzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXj0nbGFuZ3VhZ2UtJ11cIikgYXMgTm9kZUxpc3RPZjxIVE1MU2VsZWN0RWxlbWVudD47IC8vIFtpZCQ9J1xcXFxkKyddXCIpO1xyXG5cclxuICAgIGxhbmd1YWdlU2VsZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3QpIHtcclxuICAgICAgICBhY2Nlc3NpYmxlQXV0b2NvbXBsZXRlLmVuaGFuY2VTZWxlY3RFbGVtZW50KHtcclxuICAgICAgICAgICAgLy9kZWZhdWx0VmFsdWU6IHNlbGVjdC52YWx1ZSxcclxuICAgICAgICAgICAgLy90b2RvOiBkb2VzIGl0IGRlZmF1bHQgdG8gbmFtZSBpbiBodG1sP1xyXG4gICAgICAgICAgICAvL25hbWU6IHNlbGVjdC5uYW1lLFxyXG4gICAgICAgICAgICBuYW1lOiAnbGFuZ3VhZ2VOYW1lJyxcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgc2VsZWN0RWxlbWVudDogc2VsZWN0XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5zZXR1cEF1dG9jb21wbGV0ZVdoZW5BZGRBbm90aGVyKG51bGwpO1xyXG4vL30pOyJdfQ==
