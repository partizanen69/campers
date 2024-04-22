import axios from 'axios';
import { Camper } from '../store/campersSlice';
import { isDefined } from '../utils';

axios.defaults.baseURL = 'https://661d489598427bbbef01594d.mockapi.io';
export const PER_PAGE_CAMPERS_LIMIT = 4;

export const doFetchCampers = async ({
  page = 1,
  favorite,
}: { page?: number; favorite?: boolean } = {}): Promise<Camper[]> => {
  const response = await axios.get<Camper[]>('/Advert', {
    params: {
      page,
      limit: PER_PAGE_CAMPERS_LIMIT,
      ...(isDefined(favorite) ? { favorite } : null),
    },
  });
  return response.data;
};

export const doUpdateCamper = async ({
  camper,
}: {
  camper: Camper;
}): Promise<Camper> => {
  const response = await axios.put<Camper>(`/Advert/${camper._id}`, camper);
  return response.data;
};
