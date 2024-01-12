//todo: could do most of this from supplying an attribute to id the appropriate selects
// then we could remove all the hacks
function setupAutocompleteWhenAddAnother(element) {
    if (!(element instanceof HTMLElement)) {
        return;
    }
    const languageSelects = element.querySelectorAll("select[id^='language-']"); // [id$='\\d+']");
    languageSelects.forEach(function (select) {
        accessibleAutocomplete.enhanceSelectElement({
            name: 'languageName',
            defaultValue: '',
            selectElement: select
        });
        // work around accessible-autocomplete not handling errors
        // there's a discussion here about it...
        // https://github.com/alphagov/accessible-autocomplete/issues/428
        // but we've had to implement our own (hacky) solution by using MutationObserver
        // and adding extra classes (with custom css) to the input element.
        // I was going to package up this code into an exported function to ease reuse and maintanence,
        // but someone is adding official support today (2024-01-12) so we should be able to remove this soon!
        // https://github.com/alphagov/accessible-autocomplete/pull/602
        const input = document.getElementById(select.id.replace('-select', ''));
        if (!input.classList.contains('govuk-input')) {
            input.classList.add('govuk-input');
        }
        if (select.classList.contains('govuk-select--error')) {
            //todo: fix aria-describedBy on the input too
            // see https://github.com/alphagov/accessible-autocomplete/issues/589
            input.classList.add('govuk-input--error');
            const observer = new MutationObserver((mutationsList, observer) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (!input.classList.contains('govuk-input')) {
                            input.classList.add('govuk-input');
                        }
                        if (!input.classList.contains('govuk-input--error')) {
                            input.classList.add('govuk-input--error');
                        }
                    }
                }
            });
            observer.observe(input, { attributes: true });
        }
    });
}
//todo: this is a hack - we want setupAutocompleteWhenAddAnother to be in the generated js file.
// if we export it, it includes the export keyword in the generated js file
// (but we use export in the other ts files, without the js containing export!)
// so as a workaround we call it where it no-ops
setupAutocompleteWhenAddAnother(null);
//});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx1RkFBdUY7QUFDdkYscUNBQXFDO0FBQ3JDLFNBQVMsK0JBQStCLENBQUMsT0FBb0I7SUFFekQsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDcEMsT0FBTztJQUNYLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQWtDLENBQUMsQ0FBQyxrQkFBa0I7SUFFaEksZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU07UUFDcEMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUM7WUFDeEMsSUFBSSxFQUFFLGNBQWM7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLE1BQU07U0FDeEIsQ0FBQyxDQUFDO1FBRUgsMERBQTBEO1FBQzFELHdDQUF3QztRQUN4QyxpRUFBaUU7UUFDakUsZ0ZBQWdGO1FBQ2hGLG1FQUFtRTtRQUVuRSwrRkFBK0Y7UUFDL0Ysc0dBQXNHO1FBQ3RHLCtEQUErRDtRQUUvRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBcUIsQ0FBQztRQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUMzQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUM7WUFFbkQsNkNBQTZDO1lBQzdDLHFFQUFxRTtZQUVyRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQzlELEtBQUssSUFBSSxRQUFRLElBQUksYUFBYSxFQUFFLENBQUM7b0JBQ2pDLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxPQUFPLEVBQUUsQ0FBQzt3QkFFdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7NEJBQzNDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN2QyxDQUFDO3dCQUVELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7NEJBQ2xELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQzlDLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxnR0FBZ0c7QUFDaEcsMkVBQTJFO0FBQzNFLCtFQUErRTtBQUMvRSxnREFBZ0Q7QUFDaEQsK0JBQStCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsS0FBSyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGNvbnN0IGFjY2Vzc2libGVBdXRvY29tcGxldGU6IGFueTtcclxuXHJcbi8vdG9kbzogY291bGQgZG8gbW9zdCBvZiB0aGlzIGZyb20gc3VwcGx5aW5nIGFuIGF0dHJpYnV0ZSB0byBpZCB0aGUgYXBwcm9wcmlhdGUgc2VsZWN0c1xyXG4vLyB0aGVuIHdlIGNvdWxkIHJlbW92ZSBhbGwgdGhlIGhhY2tzXHJcbmZ1bmN0aW9uIHNldHVwQXV0b2NvbXBsZXRlV2hlbkFkZEFub3RoZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtpZF49J2xhbmd1YWdlLSddXCIpIGFzIE5vZGVMaXN0T2Y8SFRNTFNlbGVjdEVsZW1lbnQ+OyAvLyBbaWQkPSdcXFxcZCsnXVwiKTtcclxuXHJcbiAgICBsYW5ndWFnZVNlbGVjdHMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0KSB7XHJcbiAgICAgICAgYWNjZXNzaWJsZUF1dG9jb21wbGV0ZS5lbmhhbmNlU2VsZWN0RWxlbWVudCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsYW5ndWFnZU5hbWUnLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RFbGVtZW50OiBzZWxlY3RcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gd29yayBhcm91bmQgYWNjZXNzaWJsZS1hdXRvY29tcGxldGUgbm90IGhhbmRsaW5nIGVycm9yc1xyXG4gICAgICAgIC8vIHRoZXJlJ3MgYSBkaXNjdXNzaW9uIGhlcmUgYWJvdXQgaXQuLi5cclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWxwaGFnb3YvYWNjZXNzaWJsZS1hdXRvY29tcGxldGUvaXNzdWVzLzQyOFxyXG4gICAgICAgIC8vIGJ1dCB3ZSd2ZSBoYWQgdG8gaW1wbGVtZW50IG91ciBvd24gKGhhY2t5KSBzb2x1dGlvbiBieSB1c2luZyBNdXRhdGlvbk9ic2VydmVyXHJcbiAgICAgICAgLy8gYW5kIGFkZGluZyBleHRyYSBjbGFzc2VzICh3aXRoIGN1c3RvbSBjc3MpIHRvIHRoZSBpbnB1dCBlbGVtZW50LlxyXG5cclxuICAgICAgICAvLyBJIHdhcyBnb2luZyB0byBwYWNrYWdlIHVwIHRoaXMgY29kZSBpbnRvIGFuIGV4cG9ydGVkIGZ1bmN0aW9uIHRvIGVhc2UgcmV1c2UgYW5kIG1haW50YW5lbmNlLFxyXG4gICAgICAgIC8vIGJ1dCBzb21lb25lIGlzIGFkZGluZyBvZmZpY2lhbCBzdXBwb3J0IHRvZGF5ICgyMDI0LTAxLTEyKSBzbyB3ZSBzaG91bGQgYmUgYWJsZSB0byByZW1vdmUgdGhpcyBzb29uIVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHBoYWdvdi9hY2Nlc3NpYmxlLWF1dG9jb21wbGV0ZS9wdWxsLzYwMlxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdC5pZC5yZXBsYWNlKCctc2VsZWN0JywgJycpKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmICghaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnb3Z1ay1pbnB1dCcpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2dvdnVrLWlucHV0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnZ292dWstc2VsZWN0LS1lcnJvcicpKSB7XHJcblxyXG4gICAgICAgICAgICAvL3RvZG86IGZpeCBhcmlhLWRlc2NyaWJlZEJ5IG9uIHRoZSBpbnB1dCB0b29cclxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHBoYWdvdi9hY2Nlc3NpYmxlLWF1dG9jb21wbGV0ZS9pc3N1ZXMvNTg5XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdnb3Z1ay1pbnB1dC0tZXJyb3InKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmNsYXNzTGlzdC5jb250YWlucygnZ292dWstaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZ292dWstaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ2dvdnVrLWlucHV0LS1lcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdnb3Z1ay1pbnB1dC0tZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGlucHV0LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vdG9kbzogdGhpcyBpcyBhIGhhY2sgLSB3ZSB3YW50IHNldHVwQXV0b2NvbXBsZXRlV2hlbkFkZEFub3RoZXIgdG8gYmUgaW4gdGhlIGdlbmVyYXRlZCBqcyBmaWxlLlxyXG4vLyBpZiB3ZSBleHBvcnQgaXQsIGl0IGluY2x1ZGVzIHRoZSBleHBvcnQga2V5d29yZCBpbiB0aGUgZ2VuZXJhdGVkIGpzIGZpbGVcclxuLy8gKGJ1dCB3ZSB1c2UgZXhwb3J0IGluIHRoZSBvdGhlciB0cyBmaWxlcywgd2l0aG91dCB0aGUganMgY29udGFpbmluZyBleHBvcnQhKVxyXG4vLyBzbyBhcyBhIHdvcmthcm91bmQgd2UgY2FsbCBpdCB3aGVyZSBpdCBuby1vcHNcclxuc2V0dXBBdXRvY29tcGxldGVXaGVuQWRkQW5vdGhlcihudWxsKTtcclxuLy99KTsiXX0=
