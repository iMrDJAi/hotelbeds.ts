import Client from './Client'
import type { AxiosResponse } from 'axios'
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


/**
 * A class containing methods used to send requests to the endpoints of
 * the [APItude Hotel APIs](https://developer.hotelbeds.com/documentation/hotels/).
 *
 * **Note:** Only *Booking* and *Content* APIs are supported currently.
 */
class Hotels extends Client {
  // #region Booking API

  /**
   * This method is used to request **room availability**.
   * Some filters and special features can be applied before sending an availability request.
   *
   * A flexible date search allows customers to retrieve available rates for a specified number of days prior to and post check-in.
   *
   * The response generated is a list of hotels with the different room types, board types, and rates available for those hotels,
   * but not only restricted to the dates selected.
   *
   * BookingAPI prices are final. Our rates include supplements and discounts and no additional price calculations are required.
   *
   * It can also return cancellation fees in the availability response, providing amounts and dates at the first step of the booking.
   *
   * Timeout for this operation is 5 seconds.
   */
  availability (options: AvailabilityRQ): Promise<AxiosResponse<AvailabilityRS>> {
    return this.post(`${this.hotelBookingURL}/hotels`, options, { timeout: 5000 })
  }

  /**
   * CheckRate is an _optional_ operation used to assess and valuate the rate before the actual booking.
   * CheckRate returns the same information as the Availability response for a hotel rate with up-to-date price,
   * along with additional information regarding the rate: rate breakdown, rate comments and upselling options.
   *
   * The CheckRate method can complement the booking process, as it returns additional information to the availability request.
   * However, when the rateType value is \'RECHECK\', the CheckRate method is mandatory.
   *
   * Besides the details for the rate, CheckRate has the option to also return information of higher rates of the same hotel being
   * checked. This is called Upselling.
   *
   * Upselling returns additional room options, each with its own rate key, allowing you to upgrade the stay quality in room
   * category and rate plan even after the CheckRate operation has been performed.
   *
   * Timeout for this operation is 15 seconds.
   */
  checkRate (options: CheckRateRQ): Promise<AxiosResponse<CheckRateRS>> {
    return this.post(`${this.hotelBookingURL}/checkrates`, options, { timeout: 15000 })
  }

  /**
   * The Booking operation requests a reservation confirmation for the specified ratekey or ratekeys.
   *
   * BookingAPI does not support on-request confirmations. All confirmations are instant confirmations.
   *
   * Timeout for this operation is 60 seconds.
   */
  booking (options: BookingRQ): Promise<AxiosResponse<BookingRS>> {
    return this.post(`${this.hotelBookingURL}/bookings`, options, { timeout: 60000 })
  }

  /**
   * The booking list operation returns a list of bookings based on the search criteria.
   * The most important information returned for each booking in the list is:
   *
   *  * Booking reference
   *  * Booking holder
   *  * Booking paxes
   *  * Hotel, rooms and boards confirmed
   *  * Booking rates
   *
   * The results are returned in a paginated response that can be filtered with the use of parameters in the request.
   *
   * Timeout for this operation is 60 seconds.
   */
  bookingList (params: BookingListQR): Promise<AxiosResponse<BookingListRS>> {
    return this.get(`${this.hotelBookingURL}/bookings`, { params, timeout: 60000 })
  }

  /**
   * The BookingDetail operation allows to retrieve a booking with all its details from the booking reference locator.
   */
  bookingDetail (bookingId: string, params: BookingDetailQR): Promise<AxiosResponse<BookingDetailRS>> {
    return this.get(`${this.hotelBookingURL}/bookings/${bookingId}`, { params })
  }

  /**
   * The BookingChange operation is used to change or update different values of a booking.
   *
   * The changes that can be performed are:
   *
   *  * Change clientReference
   *  * Change remarks
   *  * Change holder name and surname
   *  * Change checkIn and checkOut date
   *  * Change board plans
   *  * Change passengers name and surname
   *  * Add rooms (only from the same type already in the booking)
   *  * Remove rooms from a booking (partial cancellation)
   */
  bookingChange (bookingId: string, options: BookingChangeRQ): Promise<AxiosResponse<BookingChangeRS>> {
    return this.put(`${this.hotelBookingURL}/bookings/${bookingId}`, options)
  }

  /**
   * BookingCancellation is used either to simulate a cancellation or to perform the actual cancellation.
   * Cancellations always take into account day and time of the destination in order to calculate what cancellation policy should be applied.
   * Timeout for this operation is 60 seconds.
   */
  bookingCancellation (bookingId: string, params: BookingCancellationQR): Promise<AxiosResponse<BookingCancellationRS>> {
    return this.delete(`${this.hotelBookingURL}/bookings/${bookingId}`, { params, timeout: 60000 })
  }

  /**
   * The Reconfirmation operation allows to retrieve the reconfirmation numbers (The confirmation number of the Hotel, both for the Hotelbeds
   * product and for that of external suppliers product) of the bookings made by the client when requested in a GET call to our endpoint.
   * Obtaining this reconfirmation numbers from hoteliers is an __asynchronous__ service: **reconfirmation numbers are not available at the time of the booking**,
   * and as such they can\'t be informed at the time of the booking, hence the need for this operation.
   * The Reconfirmation operation offers a wide variety of filters to help narrowing down reconfirmation number results.
   * Only one filter can be used at the same time. Below the four possible filters you can use:
   *
   *  * between two cheking dates
   *  * between two reconfirmation dates
   *  * list of clientReference ids
   *  * list of booking Ids
   *
   * ## Reconfirmation Service
   * Additionally we offer you the capacity to receive the reconfirmation numbers automatically in our reconformation service,
   * designed to automatically send you the reconfirmation information as soon as is available from the hoteliers in two different ways:
   *
   *  * [Push Service](/documentation/hotels/booking-api/reconfirmation-service/push-service/) : The messages will be automatically sent in JSON format
   * to an endpoint of your choice.
   *  * [Email Service](/documentation/hotels/booking-api/reconfirmation-service/email-service/): The messages will be automatically sent in an email
   * to an address of your choice.
   *
   * Contact our support team at [apitude@hotelbeds.com]() to learn more about this features.
   */
  bookingReconfirmation (params: BookingReconfirmationQR): Promise<AxiosResponse> {
    return this.get(`${this.hotelBookingURL}/bookings/reconfirmations`, { params })
  }

  // #endregion

  // #region Content API

  /** Returns the list of currently existing hotels in Hotelbeds portfolio. */
  hotels (params: HotelsQR): Promise<AxiosResponse<ApiHotelsRS>> {
    return this.get(`${this.hotelContentURL}/hotels`, { params })
  }

  /** Returns all the details associated to the Hotel. */
  hotelDetails (hotelCodes: string, params: HotelDetailsQR): Promise<AxiosResponse<ApiHotelDetailsRS>> {
    return this.get(`${this.hotelContentURL}/hotels/${hotelCodes}/details`, { params })
  }

  /**
   * Returns the list of available countries.
   *
   * This is the higher level available in our destination tree. We do not allow search by country, but it's included for organizational reasons
   * (to group destinations) and because the country codes returned are used in other levels of APItude (for example to define the sourceMarket in
   * Availability operation of [Hotel Booking API](/documentation/hotels/booking-api/api-reference/).
   */
  countries (params: CountriesQR): Promise<AxiosResponse<ApiCountriesRS>> {
    return this.get(`${this.hotelContentURL}/locations/countries`, { params })
  }

  /**
   * Return the list of available destinations, zones and grouping zones.
   *
   * Destinations are the highest level entities in our destination tree by which availability can be searched.
   * Please note that destination codes are not IATA codes. It is very important to understand that our 'destination' will not always only
   * correspond with a unique city, but usually with the main city and the area surrounding the city.
   *
   * For example, the destination code NYC in the US, corresponds with the whole New York Area, so it is not limited to the city of New York,
   * but also covers the surrounding areas, such as New Jersey and The Hamptons. Another example is BCN in Spain, which corresponds with
   * the entire Barcelona Province; so it searches hotels located in the city of Barcelona, but also in other cities within the Province of Barcelona,
   * such us Hospitalet de Llobregat, Terrassa and Sabadell. So when you search for availability using the destination code,
   * you will receive results that may be located far from the main city for which you are actually searching.
   *
   * It is very important to check the locations that the search retrieves to avoid booking hotels in a different location than the one requested by your customers.
   */
  destinations (params: DestinationsQR): Promise<AxiosResponse<ApiDestinationsRS>> {
    return this.get(`${this.hotelContentURL}/locations/destinations`, { params })
  }

  /** Returns the list of available accommodation types. */
  accommodations (params: AccommodationsQR): Promise<AxiosResponse<ApiAccommodationsRS>> {
    return this.get(`${this.hotelContentURL}/types/accommodations`, { params })
  }

  /** Returns the list of available amenities. */
  amenities (params: AmenitiesQR): Promise<AxiosResponse<ApiAmenitiesRS>> {
    return this.get(`${this.hotelContentURL}/types/amenities`, { params })
  }

  /** Returns the list of available board groups. */
  boardGroups (params: BoardGroupsQR): Promise<AxiosResponse<ApiBoardGroupsRS>> {
    return this.get(`${this.hotelContentURL}/types/boardgroups`, { params })
  }

  /** Returns the list of available board types. */
  boards (params: BoardsQR): Promise<AxiosResponse<ApiBoardsRS>> {
    return this.get(`${this.hotelContentURL}/types/boards`, { params })
  }

  /** Returns the list of available categories. */
  categories (params: CategoriesQR): Promise<AxiosResponse<ApiCategoriesRS>> {
    return this.get(`${this.hotelContentURL}/types/categories`, { params })
  }

  /** Returns the list of available chains. */
  chains (params: ChainsQR): Promise<AxiosResponse<ApiChainsRS>> {
    return this.get(`${this.hotelContentURL}/types/chains`, { params })
  }

  /** Returns the list of available values for the rateClass. */
  classifications (params: ClassificationsQR): Promise<AxiosResponse<ApiRateClassRS>> {
    return this.get(`${this.hotelContentURL}/types/classifications`, { params })
  }

  /** Returns the list of available currencies. */
  currencies (params: CurrenciesQR): Promise<AxiosResponse<ApiCurrenciesRS>> {
    return this.get(`${this.hotelContentURL}/types/currencies`, { params })
  }

  /** Returns the list of available facilities. */
  facilities (params: FacilitiesQR): Promise<AxiosResponse<ApiFacilitiesRS>> {
    return this.get(`${this.hotelContentURL}/types/facilities`, { params })
  }

  /** Returns the list of available facility groups. */
  facilityGroups (params: FacilityGroupsQR): Promise<AxiosResponse<ApiFacilityGroupsRS>> {
    return this.get(`${this.hotelContentURL}/types/facilitygroups`, { params })
  }

  /** Returns the list of available facility typologies. Remarks: Since all fields are returned by default, there won't be any field to filter. */
  facilityTypologies (params: FacilityTypologiesQR): Promise<AxiosResponse<ApiFacilityTypologiesRS>> {
    return this.get(`${this.hotelContentURL}/types/facilitytypologies`, { params })
  }

  /** Returns the descriptions of the different category groups. */
  groupCategories (params: GroupCategoriesQR): Promise<AxiosResponse<ApiGroupCategoriesRS>> {
    return this.get(`${this.hotelContentURL}/types/groupcategories`, { params })
  }

  /** Returns the descriptions of the different image types. */
  imageTypes (params: ImageTypesQR): Promise<AxiosResponse<ApiImageTypesRS>> {
    return this.get(`${this.hotelContentURL}/types/imagetypes`, { params })
  }

  /** Repair works, facilities closed,... */
  hotelIssues (params: IssuesQR): Promise<AxiosResponse<ApiIssuesRS>> {
    return this.get(`${this.hotelContentURL}/types/issues`, { params })
  }

  /**
   * Returns the list of available languages.
   *
   * The Languages operation is connected to all the operations in which a description is returned,
   * since we return the language code in which that description has been returned.
   */
  languages (params: LanguagesQR): Promise<AxiosResponse<ApiLanguagesRS>> {
    return this.get(`${this.hotelContentURL}/types/languages`, { params })
  }

  /** Returns the list of available promotions. */
  promotions (params: PromotionsQR): Promise<AxiosResponse<ApiPromotionsRS>> {
    return this.get(`${this.hotelContentURL}/types/promotions`, { params })
  }

  /**
   * Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before
   * confirming the booking with the given date.
   */
  rateCommentDetails (params: RateCommentDetailsQR): Promise<AxiosResponse<ApiRateCommentDetailsRS>> {
    return this.get(`${this.hotelContentURL}/types/ratecommentdetails`, { params })
  }

  /**
   * Returns the descriptions of the rate comments associated with the hotel that the hotelier wants the client to read before
   * confirming the booking.
   */
  rateComments (params: RateCommentsQR): Promise<AxiosResponse<ApiRateCommentsRS>> {
    return this.get(`${this.hotelContentURL}/types/ratecomments`, { params })
  }

  /** Returns the list of available rooms. */
  rooms (params: RoomsQR): Promise<AxiosResponse<ApiRoomsRS>> {
    return this.get(`${this.hotelContentURL}/types/rooms`, { params })
  }

  /** Returns the list of available segments. */
  segments (params: SegmentsQR): Promise<AxiosResponse<ApiSegmentsRS>> {
    return this.get(`${this.hotelContentURL}/types/segments`, { params })
  }

  /** List of terminals per country/destination */
  terminals (params: TerminalsQR): Promise<AxiosResponse<ApiTerminalsRS>> {
    return this.get(`${this.hotelContentURL}/types/terminals`, { params })
  }

  // #endregion
}

export default Hotels
