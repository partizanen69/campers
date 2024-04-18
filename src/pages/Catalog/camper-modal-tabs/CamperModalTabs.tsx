import { FC, useState } from 'react';
import {
  CamperModalTabsBarStyled,
  TabContentStyled,
} from './CamperModalTabs.styled';
import { CamperModalTab } from './CamperModalTab';
import { CamperFeatures } from '../../../components/CamperFeatures/CamperFeatures';
import { useSelector } from 'react-redux';
import { selectCamperSelectedForModal } from '../../../store/selectors';
import { BookingForm } from '../booking-form.tsx/BookingForm';
import { ReviewsList } from '../reviews-list/ReviewsList';

export enum SelectedTab {
  features,
  reviews,
}

export const CamperModalTabs: FC = () => {
  const camper = useSelector(selectCamperSelectedForModal)!;

  const [selectedTab, setSelectedTab] = useState<SelectedTab>(
    SelectedTab.features
  );

  return (
    <>
      <CamperModalTabsBarStyled>
        <CamperModalTab
          selected={selectedTab === SelectedTab.features}
          setSelected={() => setSelectedTab(SelectedTab.features)}
        >
          Features
        </CamperModalTab>
        <CamperModalTab
          selected={selectedTab === SelectedTab.reviews}
          setSelected={() => setSelectedTab(SelectedTab.reviews)}
        >
          Reviews
        </CamperModalTab>
      </CamperModalTabsBarStyled>
      <TabContentStyled>
        {selectedTab === SelectedTab.features && (
          <div className="tab-content-details">
            <CamperFeatures camper={camper} isFull={true} />
            <div className="vehicle-details">
              <div className="vehicle-details-header">Vehicle details</div>
              <div className="vehicle-details-content">
                <div className="vehicle-details-item">
                  <div>Form</div>
                  <div className="capitalize">{camper.form}</div>
                </div>
                <div className="vehicle-details-item">
                  <div>Length</div>
                  <div className="capitalize">{camper.length}</div>
                </div>
                <div className="vehicle-details-item">
                  <div>Width</div>
                  <div className="capitalize">{camper.width}</div>
                </div>
                <div className="vehicle-details-item">
                  <div>Height</div>
                  <div className="capitalize">{camper.height}</div>
                </div>
                <div className="vehicle-details-item">
                  <div>Tank</div>
                  <div className="capitalize">{camper.tank}</div>
                </div>
                <div className="vehicle-details-item">
                  <div>Consumption</div>
                  <div className="capitalize">{camper.consumption}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedTab === SelectedTab.reviews && <ReviewsList />}
        <BookingForm />
      </TabContentStyled>
    </>
  );
};
