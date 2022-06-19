import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
//     constructor(private boardsService: BoardsService) { }

//     @Get()
//     getAllBoard(): Board[] {
//         return this.boardsService.getAllBoards()
//     }

//     @Post()
//     @UsePipes(ValidationPipe)
//     createBoard(@Body() createBoardDto: CreateBoardDto): Board {
//         // @body() body,
//         // @body(title) title:string
//         return this.boardsService.createBoard(createBoardDto);
//     }

//     @Get('/:id')
//     getBoardById(@Param('id') id: string): Board {
//         // @prams 가 많을 경우 @params()만 사용한다.
//         return this.boardsService.getBoardById(id)
//     }

//     @Delete('/:id')
//     deleteBoard(@Param('id') id: string): void {
//         this.boardsService.deleteBoartdById(id)
//     }
//     @Patch('/:id/status')
//     patchBoardStuts(
//         @Param('id') id: string,
//         @Body('status', BoardStatusValidationPipe) status: BoardsStatus
//     ) {
//         return this.boardsService.updateBoardStatus(id, status)
//     }
}
 