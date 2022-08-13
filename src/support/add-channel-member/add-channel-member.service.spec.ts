import { Test, TestingModule } from '@nestjs/testing';
import { AddChannelMemberService } from './add-channel-member.service';

describe('AddChannelMemberService', () => {
  let service: AddChannelMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddChannelMemberService],
    }).compile();

    service = module.get<AddChannelMemberService>(AddChannelMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
