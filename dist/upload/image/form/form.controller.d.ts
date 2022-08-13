/// <reference types="multer" />
import { FormService } from './form.service.js';
export declare class FormController {
    private readonly getService;
    constructor(getService: FormService);
    getContent(file: Express.Multer.File): any;
}
