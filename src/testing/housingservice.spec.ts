import { HousingService } from '../app/housing.service';


describe('MasterService without Angular testing support', () => {
    let masterService: HousingService;
  
    it('#getValue should return real value from the real service', () => {
      masterService = new HousingService();
      expect(masterService.submitApplication('a', 'b', 'c')).toBe('a b (c)');
    });
  
  });