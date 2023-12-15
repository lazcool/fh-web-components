// A version of the MOJ's add-another component what plays nice with the accessible autocomplete component.
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
    if (this.container.data('fh-add-another-initialised')) {
        return;
    }
    this.container.data('fh-add-another-initialised', true);
    this.container.on('click', '.fh-add-another__remove-button', $.proxy(this, 'onRemoveButtonClick'));
    this.container.on('click', '.fh-add-another__add-button', $.proxy(this, 'onAddButtonClick'));
    this.container.find('.fh-add-another__add-button, fh-add-another__remove-button').prop('type', 'button');
};
window.FamilyHubsFrontend.AddAnother.prototype.onAddButtonClick = function (e) {
    var item = this.getNewItem();
    this.updateAttributes(this.getItems().length, item);
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
    var item = this.getItems().first().clone();
    if (!this.hasRemoveButton(item)) {
        this.createRemoveButton(item);
    }
    return item;
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
    item.find('[data-name], [data-id]').each(function (index, el) {
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
    items.each($.proxy(function (index, el) {
        this.updateAttributes(index, $(el));
    }, this));
    this.focusHeading();
};
window.FamilyHubsFrontend.AddAnother.prototype.focusHeading = function () {
    this.container.find('.fh-add-another__heading').focus();
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLWFub3RoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkdBQTJHO0FBQzNHLDhEQUE4RDtBQUM5RCxzR0FBc0c7QUFDdEcsb0RBQW9EO0FBRXBELE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDO0FBRTVELE1BQU0sVUFBVSxvQkFBb0I7SUFDaEMsbUNBQW1DO0lBQ25DLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRS9FLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxXQUFXO1FBQzVDLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBVSxHQUFHLFVBQVUsU0FBUztJQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU5QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQztRQUN2RCxPQUFNO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUM3RixJQUFJLENBQUMsU0FBUyxDQUFDLElB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SUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRztJQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pELENBQUMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL2FkZC1hbm90aGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQSB2ZXJzaW9uIG9mIHRoZSBNT0oncyBhZGQtYW5vdGhlciBjb21wb25lbnQgd2hhdCBwbGF5cyBuaWNlIHdpdGggdGhlIGFjY2Vzc2libGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudC5cclxuLy8gSSBkaWQgY29uc2lkZXIgc3ViY2xhc3NpbmcgdGhlIE1PSidzIGFkZC1hbm90aGVyIGNvbXBvbmVudCxcclxuLy8gYnV0IGl0IHdvdWxkIGhhdmUgYmVlbiBzbyBjb3VwbGVkIHRoYXQgaXQgd291bGQndmUgcHJvYmFibHkgYnJva2VuIG9uIGFuIHVwZGF0ZSBvZiB0aGUgTU9KIGxpYnJhcnkuXHJcbi8vIFNvIGluc3RlYWQgd2UgZm9ya2VkIGl0IGFuZCBtYWRlIG91ciBvd24gdmVyc2lvbi5cclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQgPSB3aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kIHx8IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBZGRBbm90aGVyKCk6IHZvaWQge1xyXG4gICAgLy90b2RvOiBzdXBwb3J0IG9wdGlvbnMgd2l0aCBzY29wZT9cclxuICAgIHZhciAkYWRkQW5vdGhlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2R1bGU9XCJmaC1hZGQtYW5vdGhlclwiXScpO1xyXG5cclxuICAgICRhZGRBbm90aGVycy5mb3JFYWNoKGZ1bmN0aW9uICgkYWRkQW5vdGhlcikge1xyXG5cdFx0bmV3IHdpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlcigkYWRkQW5vdGhlcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG5cdHRoaXMuY29udGFpbmVyID0gJChjb250YWluZXIpO1xyXG5cclxuXHRpZiAodGhpcy5jb250YWluZXIuZGF0YSgnZmgtYWRkLWFub3RoZXItaW5pdGlhbGlzZWQnKSkge1xyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHR0aGlzLmNvbnRhaW5lci5kYXRhKCdmaC1hZGQtYW5vdGhlci1pbml0aWFsaXNlZCcsIHRydWUpO1xyXG5cclxuXHR0aGlzLmNvbnRhaW5lci5vbignY2xpY2snLCAnLmZoLWFkZC1hbm90aGVyX19yZW1vdmUtYnV0dG9uJywgJC5wcm94eSh0aGlzLCAnb25SZW1vdmVCdXR0b25DbGljaycpKTtcclxuXHR0aGlzLmNvbnRhaW5lci5vbignY2xpY2snLCAnLmZoLWFkZC1hbm90aGVyX19hZGQtYnV0dG9uJywgJC5wcm94eSh0aGlzLCAnb25BZGRCdXR0b25DbGljaycpKTtcclxuXHR0aGlzLmNvbnRhaW5lci5maW5kKCcuZmgtYWRkLWFub3RoZXJfX2FkZC1idXR0b24sIGZoLWFkZC1hbm90aGVyX19yZW1vdmUtYnV0dG9uJykucHJvcCgndHlwZScsICdidXR0b24nKTtcclxufTtcclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlci5wcm90b3R5cGUub25BZGRCdXR0b25DbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcblx0dmFyIGl0ZW0gPSB0aGlzLmdldE5ld0l0ZW0oKTtcclxuXHR0aGlzLnVwZGF0ZUF0dHJpYnV0ZXModGhpcy5nZXRJdGVtcygpLmxlbmd0aCwgaXRlbSk7XHJcblx0dGhpcy5yZXNldEl0ZW0oaXRlbSk7XHJcblx0dmFyIGZpcnN0SXRlbSA9IHRoaXMuZ2V0SXRlbXMoKS5maXJzdCgpO1xyXG5cdGlmICghdGhpcy5oYXNSZW1vdmVCdXR0b24oZmlyc3RJdGVtKSkge1xyXG5cdFx0dGhpcy5jcmVhdGVSZW1vdmVCdXR0b24oZmlyc3RJdGVtKTtcclxuXHR9XHJcblx0dGhpcy5nZXRJdGVtcygpLmxhc3QoKS5hZnRlcihpdGVtKTtcclxuXHRpdGVtLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykuZmlyc3QoKS5mb2N1cygpO1xyXG59O1xyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyLnByb3RvdHlwZS5oYXNSZW1vdmVCdXR0b24gPSBmdW5jdGlvbiAoaXRlbSkge1xyXG5cdHJldHVybiBpdGVtLmZpbmQoJy5maC1hZGQtYW5vdGhlcl9fcmVtb3ZlLWJ1dHRvbicpLmxlbmd0aDtcclxufTtcclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlci5wcm90b3R5cGUuZ2V0SXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmZpbmQoJy5maC1hZGQtYW5vdGhlcl9faXRlbScpO1xyXG59O1xyXG5cclxud2luZG93LkZhbWlseUh1YnNGcm9udGVuZC5BZGRBbm90aGVyLnByb3RvdHlwZS5nZXROZXdJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBpdGVtID0gdGhpcy5nZXRJdGVtcygpLmZpcnN0KCkuY2xvbmUoKTtcclxuXHRpZiAoIXRoaXMuaGFzUmVtb3ZlQnV0dG9uKGl0ZW0pKSB7XHJcblx0XHR0aGlzLmNyZWF0ZVJlbW92ZUJ1dHRvbihpdGVtKTtcclxuXHR9XHJcblx0cmV0dXJuIGl0ZW07XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLnVwZGF0ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuXHRpdGVtLmZpbmQoJ1tkYXRhLW5hbWVdJykuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuXHRcdHZhciBvcmlnaW5hbElkID0gZWwuaWRcclxuXHJcblx0XHRlbC5uYW1lID0gJChlbCkuYXR0cignZGF0YS1uYW1lJykucmVwbGFjZSgvJWluZGV4JS8sIGluZGV4KTtcclxuXHRcdGVsLmlkID0gJChlbCkuYXR0cignZGF0YS1pZCcpLnJlcGxhY2UoLyVpbmRleCUvLCBpbmRleCk7XHJcblxyXG5cdFx0dmFyIGxhYmVsID0gJChlbCkuc2libGluZ3MoJ2xhYmVsJylbMF0gfHwgJChlbCkucGFyZW50cygnbGFiZWwnKVswXSB8fCBpdGVtLmZpbmQoJ1tmb3I9XCInICsgb3JpZ2luYWxJZCArICdcIl0nKVswXTtcclxuXHRcdGxhYmVsLmh0bWxGb3IgPSBlbC5pZDtcclxuXHR9KTtcclxufTtcclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlci5wcm90b3R5cGUuY3JlYXRlUmVtb3ZlQnV0dG9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRpdGVtLmFwcGVuZCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJnb3Z1ay1idXR0b24gZ292dWstYnV0dG9uLS1zZWNvbmRhcnkgZmgtYWRkLWFub3RoZXJfX3JlbW92ZS1idXR0b25cIj5SZW1vdmU8L2J1dHRvbj4nKTtcclxufTtcclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlci5wcm90b3R5cGUucmVzZXRJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRpdGVtLmZpbmQoJ1tkYXRhLW5hbWVdLCBbZGF0YS1pZF0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcclxuXHRcdGlmIChlbC50eXBlID09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PSAncmFkaW8nKSB7XHJcblx0XHRcdGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsLnZhbHVlID0gJyc7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG53aW5kb3cuRmFtaWx5SHVic0Zyb250ZW5kLkFkZEFub3RoZXIucHJvdG90eXBlLm9uUmVtb3ZlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcuZmgtYWRkLWFub3RoZXJfX2l0ZW0nKS5yZW1vdmUoKTtcclxuXHR2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcblx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0aXRlbXMuZmluZCgnLmZoLWFkZC1hbm90aGVyX19yZW1vdmUtYnV0dG9uJykucmVtb3ZlKCk7XHJcblx0fVxyXG5cdGl0ZW1zLmVhY2goJC5wcm94eShmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XHJcblx0XHR0aGlzLnVwZGF0ZUF0dHJpYnV0ZXMoaW5kZXgsICQoZWwpKTtcclxuXHR9LCB0aGlzKSk7XHJcblx0dGhpcy5mb2N1c0hlYWRpbmcoKTtcclxufTtcclxuXHJcbndpbmRvdy5GYW1pbHlIdWJzRnJvbnRlbmQuQWRkQW5vdGhlci5wcm90b3R5cGUuZm9jdXNIZWFkaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuY29udGFpbmVyLmZpbmQoJy5maC1hZGQtYW5vdGhlcl9faGVhZGluZycpLmZvY3VzKCk7XHJcbn07XHJcbiJdfQ==
