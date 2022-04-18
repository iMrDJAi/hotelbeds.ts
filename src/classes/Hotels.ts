import Client from './Client'
import type { AxiosResponse } from 'axios'
import type { StatusRS } from '../types/Status'
import type {
  AvailabilityRQ, AvailabilityRS, CheckRateRQ, CheckRateRS,
  BookingRQ, BookingRS, BookingListQR, BookingListRS,
  BookingDetailQR, BookingDetailRS, BookingChangeRQ, BookingChangeRS,
  BookingCancellationQR, BookingCancellationRS, BookingReconfirmationQR
} from '../types/HotelBookingAPI'
import type {
  HotelsQR, ApiHotelsRS, HotelDetailsQR, ApiHotelDetailsRS,
  CountriesQR, ApiCountriesRS, DestinationsQR, ApiDestinationsRS,
  AccommodationsQR, ApiAccommodationsRS, AmenitiesQR, ApiAmenitiesRS,
  BoardsQR, ApiBoardsRS, BoardGroupsQR, ApiBoardGroupsRS,
  CategoriesQR, ApiCategoriesRS, ChainsQR, ApiChainsRS,
  ClassificationsQR, ApiRateClassRS, CurrenciesQR, ApiCurrenciesRS,
  FacilitiesQR, ApiFacilitiesRS, FacilityGroupsQR, ApiFacilityGroupsRS,
  FacilityTypologiesQR, ApiFacilityTypologiesRS, GroupCategoriesQR, ApiGroupCategoriesRS,
  ImageTypesQR, ApiImageTypesRS, IssuesQR, ApiIssuesRS,
  LanguagesQR, ApiLanguagesRS, PromotionsQR, ApiPromotionsRS,
  RateCommentDetailsQR, ApiRateCommentDetailsRS, RateCommentsQR, ApiRateCommentsRS,
  RoomsQR, ApiRoomsRS, SegmentsQR, ApiSegmentsRS, TerminalsQR, ApiTerminalsRS
} from '../types/HotelContentAPI'


class Hotels extends Client {
  // #region Booking API

  bookingAPIStatus (): Promise<AxiosResponse<StatusRS>> {
    return this.get(`${this.hotelBookingURL}/status`)
  }

  availability (options: AvailabilityRQ): Promise<AxiosResponse<AvailabilityRS>> {
    return this.post(`${this.hotelBookingURL}/hotels`, options)
  }

  checkRate (options: CheckRateRQ): Promise<AxiosResponse<CheckRateRS>> {
    return this.post(`${this.hotelBookingURL}/checkrates`, options)
  }

  booking (options: BookingRQ): Promise<AxiosResponse<BookingRS>> {
    return this.post(`${this.hotelBookingURL}/bookings`, options)
  }

  bookingList (params: BookingListQR): Promise<AxiosResponse<BookingListRS>> {
    return this.get(`${this.hotelBookingURL}/bookings`, { params })
  }

  bookingDetail (bookingId: string, params: BookingDetailQR): Promise<AxiosResponse<BookingDetailRS>> {
    return this.get(`${this.hotelBookingURL}/bookings/${bookingId}`, { params })
  }

  bookingChange (bookingId: string, options: BookingChangeRQ): Promise<AxiosResponse<BookingChangeRS>> {
    return this.put(`${this.hotelBookingURL}/bookings/${bookingId}`, options)
  }

  bookingCancellation (bookingId: string, params: BookingCancellationQR): Promise<AxiosResponse<BookingCancellationRS>> {
    return this.delete(`${this.hotelBookingURL}/bookings/${bookingId}`, { params })
  }

  bookingReconfirmation (params: BookingReconfirmationQR): Promise<AxiosResponse> {
    return this.get(`${this.hotelBookingURL}/bookings/reconfirmations`, { params })
  }

  // #endregion

  // #region Content API

  contentAPIStatus (): Promise<AxiosResponse<StatusRS>> {
    return this.get(`${this.hotelContentURL}/status`)
  }

  hotels (params: HotelsQR): Promise<AxiosResponse<ApiHotelsRS>> {
    return this.get(`${this.hotelContentURL}/hotels`, { params })
  }

  hotelDetails (hotelCodes: string, params: HotelDetailsQR): Promise<AxiosResponse<ApiHotelDetailsRS>> {
    return this.get(`${this.hotelContentURL}/hotels/${hotelCodes}/details`, { params })
  }

  countries (params: CountriesQR): Promise<AxiosResponse<ApiCountriesRS>> {
    return this.get(`${this.hotelContentURL}/locations/countries`, { params })
  }

  destinations (params: DestinationsQR): Promise<AxiosResponse<ApiDestinationsRS>> {
    return this.get(`${this.hotelContentURL}/locations/destinations`, { params })
  }

  accommodations (params: AccommodationsQR): Promise<AxiosResponse<ApiAccommodationsRS>> {
    return this.get(`${this.hotelContentURL}/types/accommodations`, { params })
  }

  amenities (params: AmenitiesQR): Promise<AxiosResponse<ApiAmenitiesRS>> {
    return this.get(`${this.hotelContentURL}/types/amenities`, { params })
  }

  boardGroups (params: BoardGroupsQR): Promise<AxiosResponse<ApiBoardGroupsRS>> {
    return this.get(`${this.hotelContentURL}/types/boardgroups`, { params })
  }

  boards (params: BoardsQR): Promise<AxiosResponse<ApiBoardsRS>> {
    return this.get(`${this.hotelContentURL}/types/boards`, { params })
  }

  categories (params: CategoriesQR): Promise<AxiosResponse<ApiCategoriesRS>> {
    return this.get(`${this.hotelContentURL}/types/categories`, { params })
  }

  chains (params: ChainsQR): Promise<AxiosResponse<ApiChainsRS>> {
    return this.get(`${this.hotelContentURL}/types/chains`, { params })
  }

  classifications (params: ClassificationsQR): Promise<AxiosResponse<ApiRateClassRS>> {
    return this.get(`${this.hotelContentURL}/types/classifications`, { params })
  }

  currencies (params: CurrenciesQR): Promise<AxiosResponse<ApiCurrenciesRS>> {
    return this.get(`${this.hotelContentURL}/types/currencies`, { params })
  }

  facilities (params: FacilitiesQR): Promise<AxiosResponse<ApiFacilitiesRS>> {
    return this.get(`${this.hotelContentURL}/types/facilities`, { params })
  }

  facilityGroups (params: FacilityGroupsQR): Promise<AxiosResponse<ApiFacilityGroupsRS>> {
    return this.get(`${this.hotelContentURL}/types/facilitygroups`, { params })
  }

  facilityTypologies (params: FacilityTypologiesQR): Promise<AxiosResponse<ApiFacilityTypologiesRS>> {
    return this.get(`${this.hotelContentURL}/types/facilitytypologies`, { params })
  }

  groupCategories (params: GroupCategoriesQR): Promise<AxiosResponse<ApiGroupCategoriesRS>> {
    return this.get(`${this.hotelContentURL}/types/groupcategories`, { params })
  }

  imageTypes (params: ImageTypesQR): Promise<AxiosResponse<ApiImageTypesRS>> {
    return this.get(`${this.hotelContentURL}/types/imagetypes`, { params })
  }

  hotelIssues (params: IssuesQR): Promise<AxiosResponse<ApiIssuesRS>> {
    return this.get(`${this.hotelContentURL}/types/issues`, { params })
  }

  languages (params: LanguagesQR): Promise<AxiosResponse<ApiLanguagesRS>> {
    return this.get(`${this.hotelContentURL}/types/languages`, { params })
  }

  promotions (params: PromotionsQR): Promise<AxiosResponse<ApiPromotionsRS>> {
    return this.get(`${this.hotelContentURL}/types/promotions`, { params })
  }

  rateCommentDetails (params: RateCommentDetailsQR): Promise<AxiosResponse<ApiRateCommentDetailsRS>> {
    return this.get(`${this.hotelContentURL}/types/ratecommentdetails`, { params })
  }

  rateComments (params: RateCommentsQR): Promise<AxiosResponse<ApiRateCommentsRS>> {
    return this.get(`${this.hotelContentURL}/types/ratecomments`, { params })
  }

  rooms (params: RoomsQR): Promise<AxiosResponse<ApiRoomsRS>> {
    return this.get(`${this.hotelContentURL}/types/rooms`, { params })
  }

  segments (params: SegmentsQR): Promise<AxiosResponse<ApiSegmentsRS>> {
    return this.get(`${this.hotelContentURL}/types/segments`, { params })
  }

  terminals (params: TerminalsQR): Promise<AxiosResponse<ApiTerminalsRS>> {
    return this.get(`${this.hotelContentURL}/types/terminals`, { params })
  }

  // #endregion
}

export default Hotels
