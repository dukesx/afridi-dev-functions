import { Test, TestingModule } from '@nestjs/testing';
import { AddChannelMemberController } from './add-channel-member.controller';

describe('AddChannelMemberController', () => {
  let controller: AddChannelMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddChannelMemberController],
    }).compile();

    controller = module.get<AddChannelMemberController>(AddChannelMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
