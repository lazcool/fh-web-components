// A version of the MOJ's add-another component that plays nice with the accessible autocomplete component.
// I did consider subclassing the MOJ's add-another component,
// but it would have been so coupled that it would've probably broken on an update of the MOJ library.
// So instead we forked it and made our own version.
window.FamilyHubsFrontend = window.FamilyHubsFrontend || {};
export function initializeAddAnother() {
    //todo: support options with scope?
    var $addAnothers = document.querySelectorAll('[data-module="fh-add-another"]');
    $addAnothers.forEach(function ($addAnother) {
        new window.FamilyHubsFrontend.AddAnother($addAnother);
    });
}
window.FamilyHubsFrontend.AddAnother = function (container) {
    this.container = $(container);
    this.index = 0;
    if (this.container.data('fh-add-another-initialised')) {
        return;
    }
    //todo: this is a bit hacky - find a better way to do this
    var functionName = container.getAttribute('data-fh-add-another-callback');
    this.callback = null;
    document.addEventListener('DOMContentLoaded', function () {
        if (typeof window[functionName] === 'function') {
            this.callback = window[functionName];
            this.callback(container);
        }
    }.bind(this));
    this.container.data('fh-add-another-initialised', true);
    this.container.on('click', '.fh-add-another__remove-button', $.proxy(this, 'onRemoveButtonClick'));
    this.container.on('click', '.fh-add-another__add-button', $.proxy(this, 'onAddButtonClick'));
    this.container.find('.fh-add-another__add-button, fh-add-another__remove-button').prop('type', 'button');
};
window.FamilyHubsFrontend.AddAnother.prototype.onAddButtonClick = function (e) {
    var item = this.getNewItem();
    this.resetItem(item);
    var firstItem = this.getItems().first();
    if (!this.hasRemoveButton(firstItem)) {
        this.createRemoveButton(firstItem);
    }
    this.getItems().last().after(item);
    item.find('input, textarea, select').first().focus();
};
window.FamilyHubsFrontend.AddAnother.prototype.hasRemoveButton = function (item) {
    return item.find('.fh-add-another__remove-button').length;
};
window.FamilyHubsFrontend.AddAnother.prototype.getItems = function () {
    return this.container.find('.fh-add-another__item');
};
window.FamilyHubsFrontend.AddAnother.prototype.getNewItem = function () {
    // get the first item and clone it
    const items = this.getItems();
    const item = items[0].cloneNode(true);
    // find the autocomplete wrappers and remove the elements that are added by accessible-autocomplete
    const autocompleteWrappers = item.querySelectorAll('.autocomplete__wrapper');
    autocompleteWrappers.forEach(wrapper => {
        if (wrapper.parentNode.parentNode) {
            wrapper.parentNode.parentNode.removeChild(wrapper.parentNode);
        }
    });
    var $item = $(item);
    // update the id and name attributes
    this.updateAttributes(++this.index, $item);
    // call the callback which needs to apply accessibility-autocomplete enhancements to the new item
    if (typeof this.callback === 'function') {
        this.callback(item);
    }
    // Create a remove button if it doesn't exist
    if (!this.hasRemoveButton($item)) {
        this.createRemoveButton($item);
    }
    return $item;
};
window.FamilyHubsFrontend.AddAnother.prototype.updateAttributes = function (index, item) {
    item.find('[data-name]').each(function (i, el) {
        var originalId = el.id;
        el.name = $(el).attr('data-name').replace(/%index%/, index);
        el.id = $(el).attr('data-id').replace(/%index%/, index);
        var label = $(el).siblings('label')[0] || $(el).parents('label')[0] || item.find('[for="' + originalId + '"]')[0];
        label.htmlFor = el.id;
    });
};
window.FamilyHubsFrontend.AddAnother.prototype.createRemoveButton = function (item) {
    item.append('<button type="button" class="govuk-button govuk-button--secondary fh-add-another__remove-button">Remove</button>');
};
window.FamilyHubsFrontend.AddAnother.prototype.resetItem = function (item) {
    // accessibile-autocomplete adds an input (without data-name or data-id)
    // so we blank all input controls
    item.find('input, textarea, select').each(function (index, el) {
        if (el.type == 'checkbox' || el.type == 'radio') {
            el.checked = false;
        }
        else {
            el.value = '';
        }
    });
};
window.FamilyHubsFrontend.AddAnother.prototype.onRemoveButtonClick = function (e) {
    $(e.currentTarget).parents('.fh-add-another__item').remove();
    var items = this.getItems();
    if (items.length === 1) {
        items.find('.fh-add-another__remove-button').remove();
    }
    this.focusHeading();
};
window.FamilyHubsFrontend.AddAnother.prototype.focusHeading = function () {
    this.container.find('.fh-add-another__heading').focus();
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLWFub3RoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkdBQTJHO0FBQzNHLDhEQUE4RDtBQUM5RCxzR0FBc0c7QUFDdEcsb0RBQW9EO0FBV3BELE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDO0FBRTVELE1BQU0sVUFBVSxvQkFBb0I7SUFDaEMsbUNBQW1DO0lBQ25DLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRWxGLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxXQUFXO1FBQ3pDLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBVSxHQUFHLFVBQVUsU0FBUztJQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVmLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDO1FBQ3ZELE9BQU07SUFDUCxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUUxRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNyQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7UUFDN0MsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxD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QUN2RCxDQUFDO0lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRztJQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pELENBQUMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL2FkZC1hbm90aGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQSB2ZXJzaW9uIG9mIHRoZSBNT0oncyBhZGQtYW5vdGhlciBjb21wb25lbnQgdGhhdCBwbGF5cyBuaWNlIHdpdGggdGhlIGFjY2Vzc2libGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudC5cclxuLy8gSSBkaWQgY29uc2lkZXIgc3ViY2xhc3NpbmcgdGhlIE1PSidzIGFkZC1hbm90aGVyIGNvbXBvbmVudCxcclxuLy8gYnV0IGl0IHdvdWxkIGhhdmUgYmVlbiBzbyBjb3VwbGVkIHRoYXQgaXQgd291bGQndmUgcHJvYmFibHkgYnJva2VuIG9uIGFuIHVwZGF0ZSBvZiB0aGUgTU9KIGxpYnJhcnkuXHJcbi8vIFNvIGluc3RlYWQgd2UgZm9ya2VkIGl0IGFuZCBtYWRlIG91ciBvd24gdmVyc2lvbi5cclxuXHJcbi8vdG9kbzogd2hlbiBhY2Nlc3NpYmxlLWF1dG9jb21wbGV0ZSBjcmVhdGVzIHRoZSBpbnB1dCwgaXQgZG9lc24ndCBoYW5kbGUgdGhlIGFyaWEtZGVzY3JpYmVkYnkgY29ycmVjdGx5Li4uXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHBoYWdvdi9hY2Nlc3NpYmxlLWF1dG9jb21wbGV0ZS9pc3N1ZXMvNTg5XHJcblxyXG4vL3RvZG86IHVzZSB0aGUgaW5kZXguZC50cyBmcm9tIGhlcmUuLi5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FscGhhZ292L2FjY2Vzc2libGUtYXV0b2NvbXBsZXRlL2lzc3Vlcy81MzVcclxuZGVjbGFyZSBjb25zdCBhY2Nlc3NpYmxlQXV0b2NvbXBsZXRlOiBhbnk7XHJcblxyXG50eXBlIENhbGxiYWNrID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZCA9IHdpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQgfHwge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFkZEFub3RoZXIoKTogdm9pZCB7XHJcbiAgICAvL3RvZG86IHN1cHBvcnQgb3B0aW9ucyB3aXRoIHNjb3BlP1xyXG4gICAgdmFyICRhZGRBbm90aGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZHVsZT1cImZoLWFkZC1hbm90aGVyXCJdJyk7XHJcblxyXG5cdCRhZGRBbm90aGVycy5mb3JFYWNoKGZ1bmN0aW9uICgkYWRkQW5vdGhlcikge1xyXG5cdFx0bmV3IHdpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlcigkYWRkQW5vdGhlcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG5cdHRoaXMuY29udGFpbmVyID0gJChjb250YWluZXIpO1xyXG5cdHRoaXMuaW5kZXggPSAwO1xyXG5cclxuXHRpZiAodGhpcy5jb250YWluZXIuZGF0YSgnZmgtYWRkLWFub3RoZXItaW5pdGlhbGlzZWQnKSkge1xyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvL3RvZG86IHRoaXMgaXMgYSBiaXQgaGFja3kgLSBmaW5kIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzXHJcblx0dmFyIGZ1bmN0aW9uTmFtZSA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmgtYWRkLWFub3RoZXItY2FsbGJhY2snKTtcclxuXHJcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5jYWxsYmFjayA9IHdpbmRvd1tmdW5jdGlvbk5hbWVdO1xyXG5cdFx0XHR0aGlzLmNhbGxiYWNrKGNvbnRhaW5lcik7XHJcblx0XHR9XHJcblx0fS5iaW5kKHRoaXMpKTtcclxuXHJcblx0dGhpcy5jb250YWluZXIuZGF0YSgnZmgtYWRkLWFub3RoZXItaW5pdGlhbGlzZWQnLCB0cnVlKTtcclxuXHJcblx0dGhpcy5jb250YWluZXIub24oJ2NsaWNrJywgJy5maC1hZGQtYW5vdGhlcl9fcmVtb3ZlLWJ1dHRvbicsICQucHJveHkodGhpcywgJ29uUmVtb3ZlQnV0dG9uQ2xpY2snKSk7XHJcblx0dGhpcy5jb250YWluZXIub24oJ2NsaWNrJywgJy5maC1hZGQtYW5vdGhlcl9fYWRkLWJ1dHRvbicsICQucHJveHkodGhpcywgJ29uQWRkQnV0dG9uQ2xpY2snKSk7XHJcblx0dGhpcy5jb250YWluZXIuZmluZCgnLmZoLWFkZC1hbm90aGVyX19hZGQtYnV0dG9uLCBmaC1hZGQtYW5vdGhlcl9fcmVtb3ZlLWJ1dHRvbicpLnByb3AoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLm9uQWRkQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG5cdHZhciBpdGVtID0gdGhpcy5nZXROZXdJdGVtKCk7XHJcblx0dGhpcy5yZXNldEl0ZW0oaXRlbSk7XHJcblx0dmFyIGZpcnN0SXRlbSA9IHRoaXMuZ2V0SXRlbXMoKS5maXJzdCgpO1xyXG5cdGlmICghdGhpcy5oYXNSZW1vdmVCdXR0b24oZmlyc3RJdGVtKSkge1xyXG5cdFx0dGhpcy5jcmVhdGVSZW1vdmVCdXR0b24oZmlyc3RJdGVtKTtcclxuXHR9XHJcblx0dGhpcy5nZXRJdGVtcygpLmxhc3QoKS5hZnRlcihpdGVtKTtcclxuXHRpdGVtLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykuZmlyc3QoKS5mb2N1cygpO1xyXG59O1xyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyLnByb3RvdHlwZS5oYXNSZW1vdmVCdXR0b24gPSBmdW5jdGlvbiAoaXRlbSkge1xyXG5cdHJldHVybiBpdGVtLmZpbmQoJy5maC1hZGQtYW5vdGhlcl9fcmVtb3ZlLWJ1dHRvbicpLmxlbmd0aDtcclxufTtcclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlci5wcm90b3R5cGUuZ2V0SXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmZpbmQoJy5maC1hZGQtYW5vdGhlcl9faXRlbScpO1xyXG59O1xyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyLnByb3RvdHlwZS5nZXROZXdJdGVtID0gZnVuY3Rpb24gKCkgeyAvLzogSlF1ZXJ5PEhUTUxFbGVtZW50PiAvL0hUTUxFbGVtZW50IHtcclxuICAgIC8vIGdldCB0aGUgZmlyc3QgaXRlbSBhbmQgY2xvbmUgaXRcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBmaW5kIHRoZSBhdXRvY29tcGxldGUgd3JhcHBlcnMgYW5kIHJlbW92ZSB0aGUgZWxlbWVudHMgdGhhdCBhcmUgYWRkZWQgYnkgYWNjZXNzaWJsZS1hdXRvY29tcGxldGVcclxuICAgIGNvbnN0IGF1dG9jb21wbGV0ZVdyYXBwZXJzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0b2NvbXBsZXRlX193cmFwcGVyJyk7XHJcbiAgICBhdXRvY29tcGxldGVXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xyXG4gICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUucGFyZW50Tm9kZSkge1xyXG5cdFx0XHR3cmFwcGVyLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3cmFwcGVyLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHR2YXIgJGl0ZW0gPSAkKGl0ZW0pO1xyXG5cclxuXHQvLyB1cGRhdGUgdGhlIGlkIGFuZCBuYW1lIGF0dHJpYnV0ZXNcclxuXHR0aGlzLnVwZGF0ZUF0dHJpYnV0ZXMoKyt0aGlzLmluZGV4LCAkaXRlbSk7XHJcblxyXG5cdC8vIGNhbGwgdGhlIGNhbGxiYWNrIHdoaWNoIG5lZWRzIHRvIGFwcGx5IGFjY2Vzc2liaWxpdHktYXV0b2NvbXBsZXRlIGVuaGFuY2VtZW50cyB0byB0aGUgbmV3IGl0ZW1cclxuXHRpZiAodHlwZW9mIHRoaXMuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdHRoaXMuY2FsbGJhY2soaXRlbSk7XHJcblx0fVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIHJlbW92ZSBidXR0b24gaWYgaXQgZG9lc24ndCBleGlzdFxyXG4gICAgaWYgKCF0aGlzLmhhc1JlbW92ZUJ1dHRvbigkaXRlbSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJlbW92ZUJ1dHRvbigkaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRpdGVtO1xyXG59O1xyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyLnByb3RvdHlwZS51cGRhdGVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcblx0aXRlbS5maW5kKCdbZGF0YS1uYW1lXScpLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcblx0XHR2YXIgb3JpZ2luYWxJZCA9IGVsLmlkXHJcblxyXG5cdFx0ZWwubmFtZSA9ICQoZWwpLmF0dHIoJ2RhdGEtbmFtZScpLnJlcGxhY2UoLyVpbmRleCUvLCBpbmRleCk7XHJcblx0XHRlbC5pZCA9ICQoZWwpLmF0dHIoJ2RhdGEtaWQnKS5yZXBsYWNlKC8laW5kZXglLywgaW5kZXgpO1xyXG5cclxuXHRcdHZhciBsYWJlbCA9ICQoZWwpLnNpYmxpbmdzKCdsYWJlbCcpWzBdIHx8ICQoZWwpLnBhcmVudHMoJ2xhYmVsJylbMF0gfHwgaXRlbS5maW5kKCdbZm9yPVwiJyArIG9yaWdpbmFsSWQgKyAnXCJdJylbMF07XHJcblx0XHRsYWJlbC5odG1sRm9yID0gZWwuaWQ7XHJcblx0fSk7XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLmNyZWF0ZVJlbW92ZUJ1dHRvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0aXRlbS5hcHBlbmQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZ292dWstYnV0dG9uIGdvdnVrLWJ1dHRvbi0tc2Vjb25kYXJ5IGZoLWFkZC1hbm90aGVyX19yZW1vdmUtYnV0dG9uXCI+UmVtb3ZlPC9idXR0b24+Jyk7XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLnJlc2V0SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0Ly8gYWNjZXNzaWJpbGUtYXV0b2NvbXBsZXRlIGFkZHMgYW4gaW5wdXQgKHdpdGhvdXQgZGF0YS1uYW1lIG9yIGRhdGEtaWQpXHJcblx0Ly8gc28gd2UgYmxhbmsgYWxsIGlucHV0IGNvbnRyb2xzXHJcbiAgICBpdGVtLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XHJcbiAgICAgICAgaWYgKGVsLnR5cGUgPT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLm9uUmVtb3ZlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcuZmgtYWRkLWFub3RoZXJfX2l0ZW0nKS5yZW1vdmUoKTtcclxuXHR2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcblx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0aXRlbXMuZmluZCgnLmZoLWFkZC1hbm90aGVyX19yZW1vdmUtYnV0dG9uJykucmVtb3ZlKCk7XHJcblx0fVxyXG5cdHRoaXMuZm9jdXNIZWFkaW5nKCk7XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLmZvY3VzSGVhZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmNvbnRhaW5lci5maW5kKCcuZmgtYWRkLWFub3RoZXJfX2hlYWRpbmcnKS5mb2N1cygpO1xyXG59O1xyXG4iXX0=