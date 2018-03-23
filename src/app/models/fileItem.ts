export class FileItem {
    public file : File
    public filename : string 
    public url : string
    public isuploading : boolean
    public progress : number

    constructor ( file : File ) {
        this.file = file
        this.filename = this.file.name

        this.isuploading = false
        this.progress = 0
    }
}