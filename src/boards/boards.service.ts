import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardsStatus } from './boards.model';
import { v1 as uuid } from "uuid"
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
    // private boards: Board[] = [];


    // getAllBoards(): Board[] {
    //     return this.boards
    // }

    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardsStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     // error처리
    //     const found = this.boards.find((boards) => boards.id === id)
    //     if (!found) {
    //         throw new NotFoundException(`can't find Board with id ${id}`)
    //     }
    //     return found
    // }

    // deleteBoartdById(id: string): void {
    //     // // void로 준 이유는 리턴값을 안주기떄문
    //     // this.boards =  this.boards.filter((board)=>board.id !==id); 원래 로직
    //     const found = this.getBoardById(id)
    //     this.boards = this.boards.filter((board) => board.id = found.id)
    // }

    // updateBoardStatus(id: string, status: BoardsStatus): Board {
    //     const board = this.getBoardById(id)
    //     board.status = status
    //     return board
    // }
}
