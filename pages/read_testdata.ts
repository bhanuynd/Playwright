import {readFileSync} from "fs";
import * as fs from "fs";

export class ReadTestData{
    async parseJSON(testName: string): Promise<any> {
        const folderPath = './data/login';
        const fileName = `${testName}.json`;
        const filePath = `${folderPath}/${fileName}`;
        try {
            const jsonData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(jsonData);
        } catch (error) {
            // Handle the parsing error here
            console.error('Error parsing JSON:', error);
            throw error;
        }
    }

}