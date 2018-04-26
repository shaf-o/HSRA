import { Component, OnInit, Output, EventEmitter, ViewChild, Input, ElementRef, ViewChildren, QueryList } from '@angular/core';

export interface FileUploadWithReference {
  fileObj: File;
}

@Component({
  selector: 'app-file-upload-button',
  templateUrl: './file-upload-button.component.html',
  styleUrls: ['./file-upload-button.component.scss']
})
export class FileUploadButtonComponent implements OnInit {
  private isUploadButtonDisabled: boolean;
  private referenceFile: File;
  @ViewChild('fileuploadRef') fileuploadRef;
  @Input() filename: string;
  @Output() fileUpload: EventEmitter<FileUploadWithReference> = new EventEmitter<FileUploadWithReference>();
  @Output() deleteUpload: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( ) { }

  onFileSelected(event) {
    console.log('File is: ', event);
    console.log('Selected element is: ', this.fileuploadRef);
    const spanDiv: HTMLElement = this.fileuploadRef.nativeElement.querySelector('span.filename');
    spanDiv.innerHTML = `${event.target.files[0].name}`;
    this.referenceFile = event.target.files[0];
    this.isUploadButtonDisabled = false;
  }

  onFileSubmit() {
    const fileObject: FileUploadWithReference = {
      fileObj: <File>this.referenceFile,
    };
    this.fileUpload.emit(fileObject); // Inform the parent component that a File is select
  }

  onFileDelete() {
    const spanDiv: HTMLElement = this.fileuploadRef.nativeElement.querySelector('span.filename');
    spanDiv.innerHTML = `File removed! Select new File`;
    this.isUploadButtonDisabled = true;
    this.deleteUpload.emit(true);
  }

  ngOnInit() {
    /**
     * Disabling the upload button initially
     */
    this.isUploadButtonDisabled = true;
    const spanDiv: HTMLElement = this.fileuploadRef.nativeElement.querySelector('span.filename');
    spanDiv.innerHTML = this.filename;
  }

}
