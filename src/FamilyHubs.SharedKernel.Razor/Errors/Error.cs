﻿namespace FamilyHubs.SharedKernel.Razor.Errors;

/// <summary>
/// Represents an error that is displayed in the error summary and next to the input control.
/// </summary>
/// <param name="Id">The error id (usually an enum of error types.)</param>
/// <param name="HtmlElementId">The id of the input element that gets focus, when the error is clicked/tapped in the error summary.</param>
/// <param name="ErrorMessage">The error message that is displayed in the error summary and next to the input control.</param>
public record Error(int Id, string HtmlElementId, string ErrorMessage)
{
    /// <summary>
    /// The id of the error message element that is displayed next to the input control.
    /// Will be used as the aria-describedby attribute value, when the input is in an error state.
    /// </summary>
    public string InputErrorMessageParaId => $"{HtmlElementId}-error-message";
}