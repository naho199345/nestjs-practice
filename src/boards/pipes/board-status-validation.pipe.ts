// import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

// export class BoardStatusValidationPipe implements PipeTransform{
//     transform(value: any, metadata: ArgumentMetadata) {
//         return value
//     }
// }
import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardsStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform {
    readonly statusOption = [
        BoardsStatus.PRIVATE,
        BoardsStatus.PUBLIC
    ]
    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase()
        if (!this.isStatusValild(value)) {
            throw new BadRequestException(`${value} isn't in the status options`)
        }
        return value
    }
    private isStatusValild(status: any) {
        const index = this.statusOption.indexOf(status);
        return index !== -1
    }
}