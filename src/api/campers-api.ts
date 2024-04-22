import axios from 'axios';
import { Camper } from '../store/campersSlice';
import { isDefined } from '../utils';

axios.defaults.baseURL = 'https://661d489598427bbbef01594d.mockapi.io';
export const PER_PAGE_CAMPERS_LIMIT = 4;

export const doFetchCampers = async ({
  page = 1,
  favorite,
}: { page?: number; favorite?: boolean } = {}): Promise<Camper[]> => {
  console.log('fetching page: ', page);
  const response = await axios.get<Camper[]>('/Advert', {
    params: {
      page,
      limit: PER_PAGE_CAMPERS_LIMIT,
      ...(isDefined(favorite) ? { favorite } : null),
    },
  });
  console.log('response.data', response.data);
  return response.data;
};

export const doUpdateCamper = async ({
  camper,
}: {
  camper: Camper;
}): Promise<Camper> => {
  const response = await axios.put<Camper>(`/Advert/${camper._id}`, camper);
  console.log('response.data', response.data);
  return response.data;
};
