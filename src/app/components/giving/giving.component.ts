import { Component } from '@angular/core';

@Component({
  selector: 'app-giving',
  templateUrl: './giving.component.html',
  styleUrls: ['./giving.component.css']
})
export class GivingComponent {
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  isToastVisible = false;
  private toastTimeout?: ReturnType<typeof setTimeout>;

  async copy(text: string, label: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        this.copyWithFallback(text);
      }

      this.showToast(`${label} copied to clipboard.`, 'success');
    } catch (error) {
      this.showToast(`Couldn't copy ${label.toLowerCase()}. Please try again.`, 'error');
    }
  }

  private copyWithFallback(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  private showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.isToastVisible = true;

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.isToastVisible = false;
    }, 2500);
  }
}
