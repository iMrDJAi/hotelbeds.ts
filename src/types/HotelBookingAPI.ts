/**
 * Relevant internal information.
 * @export
 * @interface ApiAuditData
 */
export interface ApiAuditData {
  /**
   * Server process time in milliseconds.
   * @type {string}
   * @memberof ApiAuditData
   */
  'processTime'?: string
  /**
   * Date/time when the request has been processed (always in Spanish time).
   * @type {string}
   * @memberof ApiAuditData
   */
  'timestamp'?: string
  /**
   * IP address of the system host.
   * @type {string}
   * @memberof ApiAuditData
   */
  'requestHost'?: string
  /**
   * Server code or ID (for internal use).
   * @type {string}
   * @memberof ApiAuditData
   */
  'serverId'?: string
  /**
   * Environment where the request has been sent and processed.
   * @type {string}
   * @memberof ApiAuditData
   */
  'environment'?: string
  /**
   * Release version identifier.
   * @type {string}
   * @memberof ApiAuditData
   */
  'release'?: string
  /**
   * Token identifier of the operation.
   * @type {string}
   * @memberof ApiAuditData
   */
  'token'?: string
}
/**
 * The billing address of your credit card. Mandatory for clients with AVS or other fraud detection mechanisms activated. Please contact apitude@hotelbeds.com to know if you must provide this data or not. Normally this is enabled only for clients using the end user\'s credit card.
 * @export
 * @interface ApiBillingAddress
 */
export interface ApiBillingAddress {
  /**
   * Address first line.
   * @type {string}
   * @memberof ApiBillingAddress
   */
  'address1': string
  /**
   * Address second line.
   * @type {string}
   * @memberof ApiBillingAddress
   */
  'address2'?: string
  /**
   *
   * @type {string}
   * @memberof ApiBillingAddress
   */
  'city': string
  /**
   *
   * @type {string}
   * @memberof ApiBillingAddress
   */
  'state'?: string
  /**
   *
   * @type {string}
   * @memberof ApiBillingAddress
   */
  'postalCode': string
  /**
   * Code of the country.
   * @type {string}
   * @memberof ApiBillingAddress
   */
  'countryCode': string
}
/**
 * Filter for board types.
 * @export
 * @interface ApiBoards
 */
export interface ApiBoards {
  /**
   * List of board type codes to filter by. You can get all the possible board type code values through the board types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/).
   * @type {Array<string>}
   * @memberof ApiBoards
   */
  'board': Array<string>
  /**
   * Includes or excludes the listed board types from the response.
   * @type {boolean}
   * @memberof ApiBoards
   */
  'included': boolean
}
/**
 * The Booking object. Contains all data related with the booking itself.
 * @export
 * @interface ApiBooking
 */
export interface ApiBooking {
  /**
   * Unique booking locator. Format: XXXXXXXX-XXXXXXXX
   * @type {string}
   * @memberof ApiBooking
   */
  'reference'?: string
  /**
   * Unique cancellation reference. Only appears for cancelled bookings.
   * @type {string}
   * @memberof ApiBooking
   */
  'cancellationReference'?: string
  /**
   * Client internal booking reference.
   * @type {string}
   * @memberof ApiBooking
   */
  'clientReference'?: string
  /**
   * Booking creation date.
   * @type {string}
   * @memberof ApiBooking
   */
  'creationDate'?: string
  /**
   * Current status of the booking.
   * @type {string}
   * @memberof ApiBooking
   */
  'status'?: ApiBookingStatusEnum
  /**
   *
   * @type {ApiModificationPolicies}
   * @memberof ApiBooking
   */
  'modificationPolicies'?: ApiModificationPolicies
  /**
   *
   * @type {number}
   * @memberof ApiBooking
   */
  'agCommision'?: number
  /**
   * Share of the commission corresponding to the Value Added Tax.
   * @type {number}
   * @memberof ApiBooking
   */
  'commisionVAT'?: number
  /**
   * The apiKey used to create the booking.
   * @type {string}
   * @memberof ApiBooking
   */
  'creationUser'?: string
  /**
   *
   * @type {ApiHolder}
   * @memberof ApiBooking
   */
  'holder'?: ApiHolder
  /**
   * Free text that is sent to the hotelier as a comment from the client. It can be used to request or inform of special requests to hotelier like: “Non-smoking room preferred”, “Twin bed please”, “Upper floor preferred”, “Late arrival”….
   * @type {string}
   * @memberof ApiBooking
   */
  'remark'?: string
  /**
   *
   * @type {ApiReceptive}
   * @memberof ApiBooking
   */
  'invoiceCompany'?: ApiReceptive
  /**
   * Total amount of the booking in hotelCurrency (for the pay at hotel model).
   * @type {number}
   * @memberof ApiBooking
   */
  'totalSellingRate'?: number
  /**
   * Total amount of the booking.
   * @type {number}
   * @memberof ApiBooking
   */
  'totalNet'?: number
  /**
   * Remaining amount to be paid.
   * @type {number}
   * @memberof ApiBooking
   */
  'pendingAmount'?: number
  /**
   * Currency of the monetary amount.
   * @type {string}
   * @memberof ApiBooking
   */
  'currency'?: string
  /**
   *
   * @type {ApiHotel}
   * @memberof ApiBooking
   */
  'hotel'?: ApiHotel
}

export const ApiBookingStatusEnum = {
  Preconfirmed: 'PRECONFIRMED',
  Confirmed: 'CONFIRMED',
  Cancelled: 'CANCELLED'
} as const

export type ApiBookingStatusEnum = typeof ApiBookingStatusEnum[keyof typeof ApiBookingStatusEnum]

/**
 * Defines the device where the booking was made. Mandatory only payments done with the end user\'s credit card.
 * @export
 * @interface ApiBookingDevice
 */
export interface ApiBookingDevice {
  /**
   * Free field to identify the device. In the case of having an integration with Riskified, their token should be sent here.
   * @type {string}
   * @memberof ApiBookingDevice
   */
  'id'?: string
  /**
   * IP address of the end user.
   * @type {string}
   * @memberof ApiBookingDevice
   */
  'ip': string
  /**
   * useAgent of the end user\'s browser.
   * @type {string}
   * @memberof ApiBookingDevice
   */
  'userAgent': string
}
/**
 * Defines the room to be booked.
 * @export
 * @interface ApiBookingRoom
 */
export interface ApiBookingRoom {
  /**
   * Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.
   * @type {string}
   * @memberof ApiBookingRoom
   */
  'rateKey': string
  /**
   * Data of the passengers assigned to this room.
   * @type {Array<ApiPax>}
   * @memberof ApiBookingRoom
   */
  'paxes'?: Array<ApiPax>
}
/**
 * List of bookings and related information.
 * @export
 * @interface ApiBookings
 */
export interface ApiBookings {
  /**
   * Lowest value of the range of returned bookings.
   * @type {number}
   * @memberof ApiBookings
   */
  'from'?: number
  /**
   * Highest value of the range of returned bookings.
   * @type {number}
   * @memberof ApiBookings
   */
  'to'?: number
  /**
   * Total number of bookings matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiBookings
   */
  'total'?: number
  /**
   * List of returned bookings matching the parameters used in the request.
   * @type {Array<ApiBooking>}
   * @memberof ApiBookings
   */
  'bookings'?: Array<ApiBooking>
}
/**
 * Set of rules that define the penalty the client will receive if the cancellation of a booking is made after a given date.
 * @export
 * @interface ApiCancellationPolicy
 */
export interface ApiCancellationPolicy {
  /**
   * Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount.
   * @type {number}
   * @memberof ApiCancellationPolicy
   */
  'amount'?: number
  /**
   * Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, provided in hotel currency (for the pay at hotel model).
   * @type {number}
   * @memberof ApiCancellationPolicy
   */
  'hotelAmount'?: number
  /**
   * Currency in which the cancellation penalties must be paid (for the pay at hotel model).
   * @type {string}
   * @memberof ApiCancellationPolicy
   */
  'hotelCurrency'?: string
  /**
   * Date from which the penalties are applied in ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ).
   * @type {string}
   * @memberof ApiCancellationPolicy
   */
  'from'?: string
  /**
   * Penalty that will be charged for cancellations after the indicated date, represented as a monetary amount, represented as a percentage of the total amount of the booking.
   * @type {number}
   * @memberof ApiCancellationPolicy
   */
  'percent'?: number
  /**
   * Penalty that will be applied for cancellations after the indicated date, represented as a number of nights.
   * @type {number}
   * @memberof ApiCancellationPolicy
   */
  'numberOfNights'?: number
}
/**
 * Information on the accepted credit card.
 * @export
 * @interface ApiCreditCard
 */
export interface ApiCreditCard {
  /**
   * Credit card code.
   * @type {string}
   * @memberof ApiCreditCard
   */
  'code'?: string
  /**
   * Credit card name.
   * @type {string}
   * @memberof ApiCreditCard
   */
  'name'?: string
  /**
   * Hotel paymentType in which card is accepted.
   * @type {string}
   * @memberof ApiCreditCard
   */
  'paymentType'?: ApiCreditCardPaymentTypeEnum
}

export const ApiCreditCardPaymentTypeEnum = {
  Hotel: 'AT_HOTEL',
  Web: 'AT_WEB'
} as const

export type ApiCreditCardPaymentTypeEnum = typeof ApiCreditCardPaymentTypeEnum[keyof typeof ApiCreditCardPaymentTypeEnum]

/**
 * Rate for a specific day of the stay.
 * @export
 * @interface ApiDailyRate
 */
export interface ApiDailyRate {
  /**
   * Day number of the stay for which the breakdown is made.
   * @type {number}
   * @memberof ApiDailyRate
   */
  'offset'?: number
  /**
   * Net price per day.
   * @type {number}
   * @memberof ApiDailyRate
   */
  'dailyNet'?: number
  /**
   * Room selling price per day.
   * @type {number}
   * @memberof ApiDailyRate
   */
  'dailySellingRate'?: number
}
/**
 * Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes.
 * @export
 * @interface ApiError
 */
export interface ApiError {
  /**
   * Internal token code of the error.
   * @type {string}
   * @memberof ApiError
   */
  'code': string
  /**
   * Descriptive message of the cause of the error.
   * @type {string}
   * @memberof ApiError
   */
  'message'?: string
}
/**
 * Filters to limit Availability results by particular values.
 * @export
 * @interface ApiFilter
 */
export interface ApiFilter {
  /**
   * Filter for maximum number of hotels you want to receive in the response.
   * @type {number}
   * @memberof ApiFilter
   */
  'maxHotels'?: number
  /**
   * Filter for maximum number of rooms you want to receive for each hotel.
   * @type {number}
   * @memberof ApiFilter
   */
  'maxRooms'?: number
  /**
   * Filter for minimum hotel room price.
   * @type {number}
   * @memberof ApiFilter
   */
  'minRate'?: number
  /**
   * Filter for maximum hotel room price.
   * @type {number}
   * @memberof ApiFilter
   */
  'maxRate'?: number
  /**
   * Filter for maximum number of rates per room.
   * @type {number}
   * @memberof ApiFilter
   */
  'maxRatesPerRoom'?: number
  /**
   * Includes or excludes package rates in the response. Package rates are excluded by default if this is not informed.
   * @type {boolean}
   * @memberof ApiFilter
   */
  'packaging'?: boolean
  /**
   * Filter for hotel payment type.
   * @type {string}
   * @memberof ApiFilter
   */
  'paymentType'?: ApiFilterPaymentTypeEnum
  /**
   * Includes or excludes hotel packages (packages created by Hotelbeds that include another product together with the hotel accomodation: massages, tickets, etc.).
   * @type {string}
   * @memberof ApiFilter
   */
  'hotelPackage'?: ApiFilterHotelPackageEnum
  /**
   * Filter for minimun hotel category.
   * @type {number}
   * @memberof ApiFilter
   */
  'minCategory'?: number
  /**
   * Filter for maximum hotel category.
   * @type {number}
   * @memberof ApiFilter
   */
  'maxCategory'?: number
  /**
   * Filters the results by the contract requested. (NOTE: when using this filter is mandatory to inform availabilityRQ/@aifUse attribute)
   * @type {string}
   * @memberof ApiFilter
   */
  'contract'?: string
}

export const ApiFilterPaymentTypeEnum = {
  AtHotel: 'AT_HOTEL',
  AtWeb: 'AT_WEB',
  Both: 'BOTH'
} as const

export type ApiFilterPaymentTypeEnum = typeof ApiFilterPaymentTypeEnum[keyof typeof ApiFilterPaymentTypeEnum]

export const ApiFilterHotelPackageEnum = {
  Yes: 'YES',
  No: 'NO',
  Both: 'BOTH'
} as const

export type ApiFilterHotelPackageEnum = typeof ApiFilterHotelPackageEnum[keyof typeof ApiFilterHotelPackageEnum]

/**
 * Defines the geolocation data for hotel search.
 * @export
 * @interface ApiGeoLocation
 */
export interface ApiGeoLocation {
  /**
   * Longitude coordinate for geolocation search.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'longitude': number|string
  /**
   * Latitude coordinate for geolocation search.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'latitude': number|string
  /**
   * Radius size for circular search.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'radius'?: number
  /**
   * Distance unit for the radius.
   * @type {string}
   * @memberof ApiGeoLocation
   */
  'unit'?: ApiGeoLocationUnitEnum
  /**
   * Latitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'secondaryLatitude'?: number|string
  /**
   * Longitude coordinate for geolocation search for rectangle search. Determines bottom right point of the search area.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'secondaryLongitude'?: number|string
}

export const ApiGeoLocationUnitEnum = {
  Mi: 'mi',
  Km: 'km'
} as const

export type ApiGeoLocationUnitEnum = typeof ApiGeoLocationUnitEnum[keyof typeof ApiGeoLocationUnitEnum]

/**
 * Information of the holder of the booking.
 * @export
 * @interface ApiHolder
 */
export interface ApiHolder {
  /**
   * Booking holder name for all the rooms of the booking.
   * @type {string}
   * @memberof ApiHolder
   */
  'name': string
  /**
   * Booking holder surname for all rooms of the booking.
   * @type {string}
   * @memberof ApiHolder
   */
  'surname': string
}
/**
 * Information about an hotel and its associated room rates.
 * @export
 * @interface ApiHotel
 */
export interface ApiHotel {
  /**
   * Check-out date.
   * @type {string}
   * @memberof ApiHotel
   */
  'checkOut'?: string
  /**
   * Check-in date.
   * @type {string}
   * @memberof ApiHotel
   */
  'checkIn'?: string
  /**
   * Hotelbeds internal hotel code.
   * @type {number}
   * @memberof ApiHotel
   */
  'code'?: number
  /**
   * Name of the hotel.
   * @type {string}
   * @memberof ApiHotel
   */
  'name'?: string
  /**
   * Hotel description.
   * @type {string}
   * @memberof ApiHotel
   */
  'description'?: string
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:   1: Identifies preferential product with exclusive guaranteed availability.   2: Identifies top hotels.   3: Identifies the rest of hotels.   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   * @type {number}
   * @memberof ApiHotel
   */
  'exclusiveDeal'?: number
  /**
   * Hotelbeds code of the hotel category.
   * @type {string}
   * @memberof ApiHotel
   */
  'categoryCode'?: string
  /**
   * Name of the hotel category.
   * @type {string}
   * @memberof ApiHotel
   */
  'categoryName'?: string
  /**
   * Code of the destination of the hotel location.
   * @type {string}
   * @memberof ApiHotel
   */
  'destinationCode'?: string
  /**
   * Name of the destination of the hotel location.
   * @type {string}
   * @memberof ApiHotel
   */
  'destinationName'?: string
  /**
   * Code of the zone of the hotel location.
   * @type {number}
   * @memberof ApiHotel
   */
  'zoneCode'?: number
  /**
   * Name of the zone of the hotel location.
   * @type {string}
   * @memberof ApiHotel
   */
  'zoneName'?: string
  /**
   * Latitude coordinate of the hotel location.
   * @type {string}
   * @memberof ApiHotel
   */
  'latitude'?: string
  /**
   * Longitude coordinate of the hotel location.
   * @type {string}
   * @memberof ApiHotel
   */
  'longitude'?: string
  /**
   * Minimum hotel room price.
   * @type {number}
   * @memberof ApiHotel
   */
  'minRate'?: number
  /**
   * Maximum hotel room price.
   * @type {number}
   * @memberof ApiHotel
   */
  'maxRate'?: number
  /**
   * Total amount of the booking in hotelCurrency (for the pay at hotel model).
   * @type {number}
   * @memberof ApiHotel
   */
  'totalSellingRate'?: number
  /**
   * Total amount of the booking.
   * @type {number}
   * @memberof ApiHotel
   */
  'totalNet'?: number
  /**
   * Remaining amount to be paid.
   * @type {number}
   * @memberof ApiHotel
   */
  'pendingAmount'?: number
  /**
   * Client currency.
   * @type {string}
   * @memberof ApiHotel
   */
  'currency'?: string
  /**
   *
   * @type {ApiSupplier}
   * @memberof ApiHotel
   */
  'supplier'?: ApiSupplier
  /**
   *
   * @type {string}
   * @memberof ApiHotel
   */
  'clientComments'?: string
  /**
   *
   * @type {number}
   * @memberof ApiHotel
   */
  'cancellationAmount'?: number
  /**
   *
   * @type {ApiUpselling}
   * @memberof ApiHotel
   */
  'upselling'?: ApiUpselling
  /**
   *
   * @type {Array<ApiKeyword>}
   * @memberof ApiHotel
   */
  'keywords'?: Array<ApiKeyword>
  /**
   *
   * @type {Array<ApiReview>}
   * @memberof ApiHotel
   */
  'reviews'?: Array<ApiReview>
  /**
   *
   * @type {Array<Room>}
   * @memberof ApiHotel
   */
  'rooms'?: Array<Room>
  /**
   * List of credit cards accepted by the hotel for Liberate model (pay at hotel).
   * @type {Array<ApiCreditCard>}
   * @memberof ApiHotel
   */
  'creditCards'?: Array<ApiCreditCard>
  /**
   * Indicates the need for payment data(i.e.: credit card details) in order to finish the booking.
   * @type {boolean}
   * @memberof ApiHotel
   */
  'paymentDataRequired'?: boolean
}
/**
 * Information about an hotel and its associated room rates.
 * @export
 * @interface ApiHotelCheckRate
 */
export interface ApiHotelCheckRate {
  /**
   * Check-out date.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'checkOut'?: string
  /**
   * Check-in date.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'checkIn'?: string
  /**
   * Hotelbeds internal hotel code.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'code'?: number
  /**
   * Name of the hotel.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'name'?: string
  /**
   * Hotel description.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'description'?: string
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:   1: Identifies preferential product with exclusive guaranteed availability.   2: Identifies top hotels.   3: Identifies the rest of hotels.   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'exclusiveDeal'?: number
  /**
   * Hotelbeds code of the hotel category.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'categoryCode'?: string
  /**
   * Name of the hotel category.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'categoryName'?: string
  /**
   * Code of the destination of the hotel location.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'destinationCode'?: string
  /**
   * Name of the destination of the hotel location.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'destinationName'?: string
  /**
   * Code of the zone of the hotel location.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'zoneCode'?: number
  /**
   * Name of the zone of the hotel location.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'zoneName'?: string
  /**
   * Latitude coordinate of the hotel location.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'latitude'?: string
  /**
   * Longitude coordinate of the hotel location.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'longitude'?: string
  /**
   * Minimum hotel room price.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'minRate'?: number
  /**
   * Maximum hotel room price.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'maxRate'?: number
  /**
   * Total amount of the booking in hotelCurrency (for the pay at hotel model).
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'totalSellingRate'?: number
  /**
   * Total amount of the booking.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'totalNet'?: number
  /**
   * Remaining amount to be paid.
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'pendingAmount'?: number
  /**
   * Client currency.
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'currency'?: string
  /**
   *
   * @type {ApiSupplier}
   * @memberof ApiHotelCheckRate
   */
  'supplier'?: ApiSupplier
  /**
   *
   * @type {string}
   * @memberof ApiHotelCheckRate
   */
  'clientComments'?: string
  /**
   *
   * @type {number}
   * @memberof ApiHotelCheckRate
   */
  'cancellationAmount'?: number
  /**
   *
   * @type {ApiUpselling}
   * @memberof ApiHotelCheckRate
   */
  'upselling'?: ApiUpselling
  /**
   *
   * @type {Array<ApiKeyword>}
   * @memberof ApiHotelCheckRate
   */
  'keywords'?: Array<ApiKeyword>
  /**
   *
   * @type {Array<ApiReview>}
   * @memberof ApiHotelCheckRate
   */
  'reviews'?: Array<ApiReview>
  /**
   *
   * @type {Array<RoomCheckRate>}
   * @memberof ApiHotelCheckRate
   */
  'rooms'?: Array<RoomCheckRate>
  /**
   * List of credit cards accepted by the hotel for Liberate model (pay at hotel).
   * @type {Array<ApiCreditCard>}
   * @memberof ApiHotelCheckRate
   */
  'creditCards'?: Array<ApiCreditCard>
  /**
   * Indicates the need for payment data(i.e.: credit card details) in order to finish the booking.
   * @type {boolean}
   * @memberof ApiHotelCheckRate
   */
  'paymentDataRequired'?: boolean
}
/**
 * Hotel availability information.
 * @export
 * @interface ApiHotels
 */
export interface ApiHotels {
  /**
   * Check-in date in the current availability response.
   * @type {string}
   * @memberof ApiHotels
   */
  'checkIn'?: string
  /**
   * Check-out date in the current availability response.
   * @type {string}
   * @memberof ApiHotels
   */
  'checkOut'?: string
  /**
   * Information regarding the hotels.
   * @type {Array<ApiHotel>}
   * @memberof ApiHotels
   */
  'hotels'?: Array<ApiHotel>
  /**
   * Total of hotels returned in the current availability response.
   * @type {number}
   * @memberof ApiHotels
   */
  'total'?: number
}
/**
 * Defines the list of hotels for hotel search.
 * @export
 * @interface ApiHotelsFilter
 */
export interface ApiHotelsFilter {
  /**
   * List of codes of the requested hotels.
   * @type {Array<number>}
   * @memberof ApiHotelsFilter
   */
  'hotel': Array<number>
}
/**
 * Code of the keyword associated with the hotel.
 * @export
 * @interface ApiKeyword
 */
export interface ApiKeyword {
  /**
   * Keyword code.
   * @type {number}
   * @memberof ApiKeyword
   */
  'code': number
  /**
   *
   * @type {number}
   * @memberof ApiKeyword
   */
  'rating'?: number
}
/**
 * Filter by codes of keywords associated to hotels.
 * @export
 * @interface ApiKeywordsFilter
 */
export interface ApiKeywordsFilter {
  /**
   * Defines if the results must match all the indicated keyword codes.
   * @type {boolean}
   * @memberof ApiKeywordsFilter
   */
  'allIncluded'?: boolean
  /**
   * List of keyword codes to filter.
   * @type {Array<number>}
   * @memberof ApiKeywordsFilter
   */
  'keyword'?: Array<number>
}
/**
 * Information regarding the allowed modifications to the booking.
 * @export
 * @interface ApiModificationPolicies
 */
export interface ApiModificationPolicies {
  /**
   * Indicates if the booking allows cancellation.
   * @type {boolean}
   * @memberof ApiModificationPolicies
   */
  'cancellation': boolean
  /**
   * Indicates if the booking allows modification.
   * @type {boolean}
   * @memberof ApiModificationPolicies
   */
  'modification': boolean
}
/**
 * Definition of passengers groups and how they are distributed in different rooms.
 * @export
 * @interface ApiOccupancy
 */
export interface ApiOccupancy {
  /**
   * Number of requested rooms of this occupancy.
   * @type {number}
   * @memberof ApiOccupancy
   */
  'rooms': number
  /**
   * Number of adult passengers for this room.
   * @type {number}
   * @memberof ApiOccupancy
   */
  'adults': number
  /**
   * number of child passengers for this room.
   * @type {number}
   * @memberof ApiOccupancy
   */
  'children': number
  /**
   * List of paxes for the room.
   * @type {Array<ApiPax>}
   * @memberof ApiOccupancy
   */
  'paxes'?: Array<ApiPax>
}
/**
 * Offer information.
 * @export
 * @interface ApiOffer
 */
export interface ApiOffer {
  /**
   * Code of the offer.
   * @type {string}
   * @memberof ApiOffer
   */
  'code'?: string
  /**
   * Short name/description of the offer.
   * @type {string}
   * @memberof ApiOffer
   */
  'name'?: string
  /**
   * Monetary amount deducted by the offer. NOTE: This deduction is already applied to the final price.
   * @type {number}
   * @memberof ApiOffer
   */
  'amount'?: number
}
/**
 * Passenger information.
 * @export
 * @interface ApiPax
 */
export interface ApiPax {
  /**
   *
   * @type {number}
   * @memberof ApiPax
   */
  'roomId'?: number
  /**
   * Passenger type, defines if the passenger is adult or child.
   * @type {string}
   * @memberof ApiPax
   */
  'type': ApiPaxTypeEnum
  /**
   * Age of the passenger (required for children passengers).
   * @type {number}
   * @memberof ApiPax
   */
  'age'?: number
  /**
   * Name of the passenger.
   * @type {string}
   * @memberof ApiPax
   */
  'name'?: string
  /**
   * Surname of the passenger.
   * @type {string}
   * @memberof ApiPax
   */
  'surname'?: string
}

export const ApiPaxTypeEnum = {
  Ad: 'AD',
  Ch: 'CH'
} as const

export type ApiPaxTypeEnum = typeof ApiPaxTypeEnum[keyof typeof ApiPaxTypeEnum]

/**
 * Credit card information.
 * @export
 * @interface ApiPaymentCard
 */
export interface ApiPaymentCard {
  /**
   * Credit card type.
   * @type {string}
   * @memberof ApiPaymentCard
   */
  'cardType': ApiPaymentCardCardTypeEnum
  /**
   * Credit card number (without spaces).
   * @type {string}
   * @memberof ApiPaymentCard
   */
  'cardNumber': string
  /**
   * Name of the credit card holder exactly as it appears on the credit card.
   * @type {string}
   * @memberof ApiPaymentCard
   */
  'cardHolderName': string
  /**
   * Expiration date of the credit card
   * @type {string}
   * @memberof ApiPaymentCard
   */
  'expiryDate': string
  /**
   * CVC security code of the credit card.
   * @type {string}
   * @memberof ApiPaymentCard
   */
  'cardCVC': string
}

export const ApiPaymentCardCardTypeEnum = {
  Amex: 'AMEX',
  Euro6000: 'EURO6000',
  Jcb: 'JCB',
  Diners: 'DINERS',
  Mastercard: 'MASTERCARD',
  Visa: 'VISA',
  Maestro: 'MAESTRO',
  Switch: 'SWITCH',
  SoloGb: 'SOLO_GB',
  Airplus: 'AIRPLUS',
  Chinaunionpay: 'CHINAUNIONPAY',
  Discover: 'DISCOVER'
} as const

export type ApiPaymentCardCardTypeEnum = typeof ApiPaymentCardCardTypeEnum[keyof typeof ApiPaymentCardCardTypeEnum]

/**
 * Contact data for billing.
 * @export
 * @interface ApiPaymentContactData
 */
export interface ApiPaymentContactData {
  /**
   * Email address.
   * @type {string}
   * @memberof ApiPaymentContactData
   */
  'email': string
  /**
   * Telephone number.
   * @type {string}
   * @memberof ApiPaymentContactData
   */
  'phoneNumber': string
}
/**
 * Payment information. This is mandatory for rates with paymentType=\'AT_HOTEL\' or for accounts setup as credit card payment.
 * @export
 * @interface ApiPaymentData
 */
export interface ApiPaymentData {
  /**
   *
   * @type {ApiPaymentCard}
   * @memberof ApiPaymentData
   */
  'paymentCard': ApiPaymentCard
  /**
   *
   * @type {ApiPaymentContactData}
   * @memberof ApiPaymentData
   */
  'contactData': ApiPaymentContactData
  /**
   *
   * @type {ApiBillingAddress}
   * @memberof ApiPaymentData
   */
  'billingAddress'?: ApiBillingAddress
  /**
   *
   * @type {ThreeDsData}
   * @memberof ApiPaymentData
   */
  'threeDsData'?: ThreeDsData
  /**
   * Identifies web partners bookings. Only required when using the end user\'s credit card.
   * @type {number}
   * @memberof ApiPaymentData
   */
  'webPartner'?: number
  /**
   *
   * @type {ApiBookingDevice}
   * @memberof ApiPaymentData
   */
  'device'?: ApiBookingDevice
}
/**
 * Promotion information.
 * @export
 * @interface ApiPromotion
 */
export interface ApiPromotion {
  /**
   * Code of the promotion.
   * @type {string}
   * @memberof ApiPromotion
   */
  'code'?: string
  /**
   * Short name/description of the promotion.
   * @type {string}
   * @memberof ApiPromotion
   */
  'name'?: string
  /**
   * Additional information regarding the promotion.
   * @type {string}
   * @memberof ApiPromotion
   */
  'remark'?: string
}
/**
 * Definition of a rate.
 * @export
 * @interface ApiRate
 */
export interface ApiRate {
  /**
   * Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.
   * @type {string}
   * @memberof ApiRate
   */
  'rateKey'?: string
  /**
   * Class of the rate.
   * @type {string}
   * @memberof ApiRate
   */
  'rateClass'?: string
  /**
   * Determines if can booked directly (BOOKABLE) or if it needs to be checked with the ‘CheckRate’ operation (RECHECK).
   * @type {string}
   * @memberof ApiRate
   */
  'rateType'?: ApiRateRateTypeEnum
  /**
   * Net price of the rate.
   * @type {number}
   * @memberof ApiRate
   */
  'net'?: number
  /**
   * Profit margin that the agency would take if it sells at that recommended price.
   * @type {number}
   * @memberof ApiRate
   */
  'discount'?: number
  /**
   * Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.
   * @type {number}
   * @memberof ApiRate
   */
  'discountPCT'?: number
  /**
   * Gross price of the room in case it is included.
   * @type {number}
   * @memberof ApiRate
   */
  'sellingRate'?: number
  /**
   * Gross price of the room in hotelCurrency(for the pay at hotel model).
   * @type {number}
   * @memberof ApiRate
   */
  'hotelSellingRate'?: number
  /**
   * Hotel currency(for the pay at hotel model).
   * @type {string}
   * @memberof ApiRate
   */
  'hotelCurrency'?: string
  /**
   * Identifies if the rate price is recommended.
   * @type {boolean}
   * @memberof ApiRate
   */
  'hotelMandatory'?: boolean
  /**
   * Number of rooms available for a particular room type.
   * @type {number}
   * @memberof ApiRate
   */
  'allotment'?: number
  /**
   * Profit margin the agency takes (commissionable model).
   * @type {number}
   * @memberof ApiRate
   */
  'commission'?: number
  /**
   * Share of the commission corresponding to the Value Added Tax.
   * @type {number}
   * @memberof ApiRate
   */
  'commissionVAT'?: number
  /**
   * Percentual share of the price corresponding to commision.
   * @type {number}
   * @memberof ApiRate
   */
  'commissionPCT'?: number
  /**
   * Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ).
   * @type {string}
   * @memberof ApiRate
   */
  'rateCommentsId'?: string
  /**
   * Rate comments that contain important information.
   * @type {string}
   * @memberof ApiRate
   */
  'rateComments'?: string
  /**
   * Defines the type of payment accepted.
   * @type {string}
   * @memberof ApiRate
   */
  'paymentType'?: ApiRatePaymentTypeEnum
  /**
   * Defines if the rate is for packaging.
   * @type {boolean}
   * @memberof ApiRate
   */
  'packaging'?: boolean
  /**
   * Internal board code.
   * @type {string}
   * @memberof ApiRate
   */
  'boardCode'?: string
  /**
   * Board name/description.
   * @type {string}
   * @memberof ApiRate
   */
  'boardName'?: string
  /**
   *
   * @type {ApiRateBreakDown}
   * @memberof ApiRate
   */
  'rateBreakDown'?: ApiRateBreakDown
  /**
   * Number of rooms requested.
   * @type {number}
   * @memberof ApiRate
   */
  'rooms'?: number
  /**
   * Number of adults requested for each room.
   * @type {number}
   * @memberof ApiRate
   */
  'adults'?: number
  /**
   * Number of children requested for each room.
   * @type {number}
   * @memberof ApiRate
   */
  'children'?: number
  /**
   * Ages of the children (if any).
   * @type {string}
   * @memberof ApiRate
   */
  'childrenAges'?: string
  /**
   * Difference between original rate price and upselling rate price.
   * @type {number}
   * @memberof ApiRate
   */
  'rateup'?: number
  /**
   * Brand of the hotel.
   * @type {string}
   * @memberof ApiRate
   */
  'brand'?: string
  /**
   * Indicates if the rate is only for residents (only appears when resident rates are requested).
   * @type {boolean}
   * @memberof ApiRate
   */
  'resident'?: boolean
  /**
   * List of cancellation policies on the rate.
   * @type {Array<ApiCancellationPolicy>}
   * @memberof ApiRate
   */
  'cancellationPolicies'?: Array<ApiCancellationPolicy>
  /**
   *
   * @type {ApiTaxes}
   * @memberof ApiRate
   */
  'taxes'?: ApiTaxes
  /**
   * List of promotions on the rate.
   * @type {Array<ApiPromotion>}
   * @memberof ApiRate
   */
  'promotions'?: Array<ApiPromotion>
  /**
   * List of offers on the rate.
   * @type {Array<ApiOffer>}
   * @memberof ApiRate
   */
  'offers'?: Array<ApiOffer>
  /**
   * Information about rates for alternative dates.
   * @type {Array<ApiShiftRate>}
   * @memberof ApiRate
   */
  'shiftRates'?: Array<ApiShiftRate>
  /**
   * Breakdown of the rate for each day of the stay.
   * @type {Array<ApiDailyRate>}
   * @memberof ApiRate
   */
  'dailyRates'?: Array<ApiDailyRate>
}

export const ApiRateRateTypeEnum = {
  Bookable: 'BOOKABLE',
  Recheck: 'RECHECK'
} as const

export type ApiRateRateTypeEnum = typeof ApiRateRateTypeEnum[keyof typeof ApiRateRateTypeEnum]

export const ApiRatePaymentTypeEnum = {
  Hotel: 'AT_HOTEL',
  Web: 'AT_WEB'
} as const

export type ApiRatePaymentTypeEnum = typeof ApiRatePaymentTypeEnum[keyof typeof ApiRatePaymentTypeEnum]

/**
 * Breakdown of the rate.
 * @export
 * @interface ApiRateBreakDown
 */
export interface ApiRateBreakDown {
  /**
   * Information on discounts for the rate.
   * @type {Array<ApiRateDiscount>}
   * @memberof ApiRateBreakDown
   */
  'rateDiscounts'?: Array<ApiRateDiscount>
  /**
   * Information on supplements for the rate.
   * @type {Array<ApiRateSupplement>}
   * @memberof ApiRateBreakDown
   */
  'rateSupplements'?: Array<ApiRateSupplement>
}
/**
 * Definition of a rate.
 * @export
 * @interface ApiRateCheckRate
 */
export interface ApiRateCheckRate {
  /**
   * Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'rateKey'?: string
  /**
   * Class of the rate.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'rateClass'?: string
  /**
   * Determines if can booked directly (BOOKABLE) or if it needs to be checked with the ‘CheckRate’ operation (RECHECK).
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'rateType'?: ApiRateCheckRateRateTypeEnum
  /**
   * Net price of the rate.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'net'?: number
  /**
   * Profit margin that the agency would take if it sells at that recommended price.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'discount'?: number
  /**
   * Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'discountPCT'?: number
  /**
   * Gross price of the room in case it is included.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'sellingRate'?: number
  /**
   * Gross price of the room in hotelCurrency(for the pay at hotel model).
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'hotelSellingRate'?: number
  /**
   * Hotel currency(for the pay at hotel model).
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'hotelCurrency'?: string
  /**
   * Identifies if the rate price is recommended.
   * @type {boolean}
   * @memberof ApiRateCheckRate
   */
  'hotelMandatory'?: boolean
  /**
   * Number of rooms available for a particular room type.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'allotment'?: number
  /**
   * Profit margin the agency takes (commissionable model).
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'commission'?: number
  /**
   * Share of the commission corresponding to the Value Added Tax.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'commissionVAT'?: number
  /**
   * Percentual share of the price corresponding to commision.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'commissionPCT'?: number
  /**
   * Comments associated to this rate (more information on [Hotel Content API](/documentation/hotels/content-api/api-reference/) ).
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'rateCommentsId'?: string
  /**
   * Rate comments that contain important information.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'rateComments'?: string
  /**
   * Defines the type of payment accepted.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'paymentType'?: ApiRateCheckRatePaymentTypeEnum
  /**
   * Defines if the rate is for packaging.
   * @type {boolean}
   * @memberof ApiRateCheckRate
   */
  'packaging'?: boolean
  /**
   * Internal board code.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'boardCode'?: string
  /**
   * Board name/description.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'boardName'?: string
  /**
   *
   * @type {ApiRateBreakDown}
   * @memberof ApiRateCheckRate
   */
  'rateBreakDown'?: ApiRateBreakDown
  /**
   * Number of rooms requested.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'rooms'?: number
  /**
   * Number of adults requested for each room.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'adults'?: number
  /**
   * Number of children requested for each room.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'children'?: number
  /**
   * Ages of the children (if any).
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'childrenAges'?: string
  /**
   * Difference between original rate price and upselling rate price.
   * @type {number}
   * @memberof ApiRateCheckRate
   */
  'rateup'?: number
  /**
   * Brand of the hotel.
   * @type {string}
   * @memberof ApiRateCheckRate
   */
  'brand'?: string
  /**
   * Indicates if the rate is only for residents (only appears when resident rates are requested).
   * @type {boolean}
   * @memberof ApiRateCheckRate
   */
  'resident'?: boolean
  /**
   * List of cancellation policies on the rate.
   * @type {Array<ApiCancellationPolicy>}
   * @memberof ApiRateCheckRate
   */
  'cancellationPolicies'?: Array<ApiCancellationPolicy>
  /**
   *
   * @type {ApiTaxes}
   * @memberof ApiRateCheckRate
   */
  'taxes'?: ApiTaxes
  /**
   * List of promotions on the rate.
   * @type {Array<ApiPromotion>}
   * @memberof ApiRateCheckRate
   */
  'promotions'?: Array<ApiPromotion>
  /**
   * List of offers on the rate.
   * @type {Array<ApiOffer>}
   * @memberof ApiRateCheckRate
   */
  'offers'?: Array<ApiOffer>
  /**
   * Information about rates for alternative dates.
   * @type {Array<ApiShiftRate>}
   * @memberof ApiRateCheckRate
   */
  'shiftRates'?: Array<ApiShiftRate>
}

export const ApiRateCheckRateRateTypeEnum = {
  Bookable: 'BOOKABLE',
  Recheck: 'RECHECK'
} as const

export type ApiRateCheckRateRateTypeEnum = typeof ApiRateCheckRateRateTypeEnum[keyof typeof ApiRateCheckRateRateTypeEnum]

export const ApiRateCheckRatePaymentTypeEnum = {
  Hotel: 'AT_HOTEL',
  Web: 'AT_WEB'
} as const

export type ApiRateCheckRatePaymentTypeEnum = typeof ApiRateCheckRatePaymentTypeEnum[keyof typeof ApiRateCheckRatePaymentTypeEnum]

/**
 * Information describing a discount on a rate.
 * @export
 * @interface ApiRateDiscount
 */
export interface ApiRateDiscount {
  /**
   * Code of the discount.
   * @type {string}
   * @memberof ApiRateDiscount
   */
  'code'?: string
  /**
   * Discount name/description.
   * @type {string}
   * @memberof ApiRateDiscount
   */
  'name'?: string
  /**
   * Monetary deducted by the discount NOTE: This deduction is already applied to the final price.
   * @type {number}
   * @memberof ApiRateDiscount
   */
  'amount'?: number
}
/**
 * Information describing a supplement on a rate.
 * @export
 * @interface ApiRateSupplement
 */
export interface ApiRateSupplement {
  /**
   * Internal code of the supplement.
   * @type {string}
   * @memberof ApiRateSupplement
   */
  'code'?: string
  /**
   * Name/description of the supplement.
   * @type {string}
   * @memberof ApiRateSupplement
   */
  'name'?: string
  /**
   * Date from which the discount is applied.
   * @type {string}
   * @memberof ApiRateSupplement
   */
  'from'?: string
  /**
   * Date when the discount ends.
   * @type {string}
   * @memberof ApiRateSupplement
   */
  'to'?: string
  /**
   * Amount of the supplement.
   * @type {number}
   * @memberof ApiRateSupplement
   */
  'amount'?: number
  /**
   * Number of nights for which the supplement applies.
   * @type {number}
   * @memberof ApiRateSupplement
   */
  'nights'?: number
  /**
   * Number of paxes that are affected by the supplement.
   * @type {number}
   * @memberof ApiRateSupplement
   */
  'paxNumber'?: number
}
/**
 * Information about the invoice company.
 * @export
 * @interface ApiReceptive
 */
export interface ApiReceptive {
  /**
   * Registration number of the invoice company.
   * @type {string}
   * @memberof ApiReceptive
   */
  'registrationNumber'?: string
  /**
   * Code of the invoice company.
   * @type {string}
   * @memberof ApiReceptive
   */
  'code'?: string
  /**
   * Name of the invoice company.
   * @type {string}
   * @memberof ApiReceptive
   */
  'company'?: string
}
/**
 * Reviews of the hotel.
 * @export
 * @interface ApiReview
 */
export interface ApiReview {
  /**
   * Rating value.
   * @type {number}
   * @memberof ApiReview
   */
  'rate'?: number
  /**
   * Total number of ratings for that particular hotel.
   * @type {number}
   * @memberof ApiReview
   */
  'reviewCount'?: number
  /**
   * Source of the review. Posible values: TRIPADVISOR, HOTELBEDS.
   * @type {string}
   * @memberof ApiReview
   */
  'type'?: string
}
/**
 * Filter hotels by rating and number of reviews.
 * @export
 * @interface ApiReviewFilter
 */
export interface ApiReviewFilter {
  /**
   * Defines the source of the reviews.
   * @type {string}
   * @memberof ApiReviewFilter
   */
  'type': ApiReviewFilterTypeEnum
  /**
   * Minimun review rating you want the hotels to have.
   * @type {number}
   * @memberof ApiReviewFilter
   */
  'minRate'?: number
  /**
   * Maximum review rating you want the hotels to have.
   * @type {number}
   * @memberof ApiReviewFilter
   */
  'maxRate'?: number
  /**
   * Minimum number of reviews you want the hotels to have.
   * @type {number}
   * @memberof ApiReviewFilter
   */
  'minReviewCount'?: number
}

export const ApiReviewFilterTypeEnum = {
  Tripadvisor: 'TRIPADVISOR',
  Hotelbeds: 'HOTELBEDS'
} as const

export type ApiReviewFilterTypeEnum = typeof ApiReviewFilterTypeEnum[keyof typeof ApiReviewFilterTypeEnum]

/**
 * Filter for room types.
 * @export
 * @interface ApiRooms
 */
export interface ApiRooms {
  /**
   * List of room type codes to filter by. You can get all the possible room type code values through the room types operation of [Hotel Content API](/documentation/hotels/content-api/api-reference/).
   * @type {Array<string>}
   * @memberof ApiRooms
   */
  'room': Array<string>
  /**
   * Includes or excludes the listed room types from the response.
   * @type {boolean}
   * @memberof ApiRooms
   */
  'included': boolean
}
/**
 * Definition of a rate for an alternative date to the one used in the availability request.
 * @export
 * @interface ApiShiftRate
 */
export interface ApiShiftRate {
  /**
   * Internal key that represents a combination of room type, category, board and occupancy. Is returned in Availability and used to valuate a rate and confirm a booking.
   * @type {string}
   * @memberof ApiShiftRate
   */
  'rateKey'?: string
  /**
   * Class of the rate.
   * @type {string}
   * @memberof ApiShiftRate
   */
  'rateClass'?: string
  /**
   * Determines if can booked directly (BOOKABLE) or if it needs to be checked with the ‘CheckRate’ operation (RECHECK).
   * @type {string}
   * @memberof ApiShiftRate
   */
  'rateType'?: ApiShiftRateRateTypeEnum
  /**
   * Net price of the rate.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'net'?: number
  /**
   * Profit margin that the agency would take if it sells at that recommended price.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'discount'?: number
  /**
   * Percentual share of the price corresponding to the profit margin the agency would take if it sells at that recommended price.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'discountPCT'?: number
  /**
   * Gross price of the room in case it is included.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'sellingRate'?: number
  /**
   * Gross price of the room in hotelCurrency(for the pay at hotel model).
   * @type {number}
   * @memberof ApiShiftRate
   */
  'hotelSellingRate'?: number
  /**
   * Hotel currency(for the pay at hotel model).
   * @type {string}
   * @memberof ApiShiftRate
   */
  'hotelCurrency'?: string
  /**
   * Identifies if the rate price is recommended.
   * @type {boolean}
   * @memberof ApiShiftRate
   */
  'hotelMandatory'?: boolean
  /**
   * Number of rooms available for a particular room type.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'allotment'?: number
  /**
   * Profit margin the agency takes (commissionable model).
   * @type {number}
   * @memberof ApiShiftRate
   */
  'commission'?: number
  /**
   * Share of the commission corresponding to the Value Added Tax.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'commissionVAT'?: number
  /**
   * Percentual share of the price corresponding to commision.
   * @type {number}
   * @memberof ApiShiftRate
   */
  'commissionPCT'?: number
  /**
   * CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates.
   * @type {string}
   * @memberof ApiShiftRate
   */
  'checkIn'?: string
  /**
   * CheckIn date for the shift rate. This will always be different than the requested date or the dates of the not alternative rates.
   * @type {string}
   * @memberof ApiShiftRate
   */
  'checkOut'?: string
  /**
   * Brand of the hotel.
   * @type {string}
   * @memberof ApiShiftRate
   */
  'brand'?: string
  /**
   * Indicates if the rate is only for residents (only appears when resident rates are requested).
   * @type {boolean}
   * @memberof ApiShiftRate
   */
  'resident'?: boolean
}

export const ApiShiftRateRateTypeEnum = {
  Bookable: 'BOOKABLE',
  Recheck: 'RECHECK'
} as const

export type ApiShiftRateRateTypeEnum = typeof ApiShiftRateRateTypeEnum[keyof typeof ApiShiftRateRateTypeEnum]

/**
 * Defines the time of the stay at the hotel.
 * @export
 * @interface ApiStay
 */
export interface ApiStay {
  /**
   * Check-in date.
   * @type {string}
   * @memberof ApiStay
   */
  'checkIn': string
  /**
   * Check-out date.
   * @type {string}
   * @memberof ApiStay
   */
  'checkOut': string
  /**
   * Amount of days after and before the check-in to check availability, keeping the same stay duration.
   * @type {number}
   * @memberof ApiStay
   */
  'shiftDays'?: number
  /**
   * Defines if results are returned for shiftDays even if there\'s no results for the searched dates.
   * @type {boolean}
   * @memberof ApiStay
   */
  'allowOnlyShift'?: boolean
}
/**
 * Supplier information.
 * @export
 * @interface ApiSupplier
 */
export interface ApiSupplier {
  /**
   * Supplier name.
   * @type {string}
   * @memberof ApiSupplier
   */
  'name'?: string
  /**
   * Supplier VAT number.
   * @type {string}
   * @memberof ApiSupplier
   */
  'vatNumber'?: string
}
/**
 * Tax information.
 * @export
 * @interface ApiTax
 */
export interface ApiTax {
  /**
   * Indicates if the tax is included in the price or not.
   * @type {boolean}
   * @memberof ApiTax
   */
  'included'?: boolean
  /**
   * Value of the tax as a percentage.
   * @type {number}
   * @memberof ApiTax
   */
  'percent'?: number
  /**
   * Value of the tax in hotel currency if the tax is not included in the price.
   * @type {number}
   * @memberof ApiTax
   */
  'amount'?: number
  /**
   * Currency of the tax amount.
   * @type {string}
   * @memberof ApiTax
   */
  'currency'?: string
  /**
   * Type of the tax.
   * @type {string}
   * @memberof ApiTax
   */
  'type'?: ApiTaxTypeEnum
  /**
   * Net amount of the tax in the client configured currency.
   * @type {number}
   * @memberof ApiTax
   */
  'clientAmount'?: number
  /**
   * Client configured currency.
   * @type {string}
   * @memberof ApiTax
   */
  'clientCurrency'?: string
}

export const ApiTaxTypeEnum = {
  Tax: 'TAX',
  Fee: 'FEE',
  Taxesandfees: 'TAXESANDFEES'
} as const

export type ApiTaxTypeEnum = typeof ApiTaxTypeEnum[keyof typeof ApiTaxTypeEnum]

/**
 * Information of taxes.
 * @export
 * @interface ApiTaxes
 */
export interface ApiTaxes {
  /**
   * Indicates if all taxes are included or not.
   * @type {boolean}
   * @memberof ApiTaxes
   */
  'allIncluded'?: boolean
  /**
   *\"margin\": This is an indirect tax regime for travel agencies where split of taxes is not shown in the invoices. In this case, the customer could not deduct any taxes even if the final customer is a legal entity with the right of deduction for indirect taxes. \"general\": This is the indirect tax regime where the split of taxes is shown in the invoices. In this case, the booking will be invoiced with split of taxes and the customer could be able to deduct the VAT and in some countries, these taxes are reduced rates. This tax scheme offers tax advantage for business customers with the right of deduction for indirect taxes.
   * @type {string}
   * @memberof ApiTaxes
   */
  'taxScheme'?: ApiTaxesTaxSchemeEnum
  /**
   * List of taxes.
   * @type {Array<ApiTax>}
   * @memberof ApiTaxes
   */
  'taxes'?: Array<ApiTax>
}

export const ApiTaxesTaxSchemeEnum = {
  Margin: 'margin',
  General: 'general'
} as const

export type ApiTaxesTaxSchemeEnum = typeof ApiTaxesTaxSchemeEnum[keyof typeof ApiTaxesTaxSchemeEnum]

/**
 * Additional room options with superior category available at the same hotel that was requested.
 * @export
 * @interface ApiUpselling
 */
export interface ApiUpselling {
  /**
   * List of available rooms with superior category.
   * @type {Array<Room>}
   * @memberof ApiUpselling
   */
  'rooms'?: Array<Room>
}
/**
 * Booking voucher information.
 * @export
 * @interface ApiVoucher
 */
export interface ApiVoucher {
  /**
   * Language code that defines the language of the descriptions of the voucher. English will be used by default if this field is not informed.
   * @type {string}
   * @memberof ApiVoucher
   */
  'language'?: string
  /**
   *
   * @type {ApiVoucherEmail}
   * @memberof ApiVoucher
   */
  'email'?: ApiVoucherEmail
  /**
   * Path of the picture you want to be featured in the header of the voucher as logo. Accepted formats: PNG, JPG, GIF & BMP. Max size: 100px x 100px. The filename part of the picture path cannot exceed 35 characters length.
   * @type {string}
   * @memberof ApiVoucher
   */
  'logo'?: string
}
/**
 * Information regarding the email delivery of the voucher.
 * @export
 * @interface ApiVoucherEmail
 */
export interface ApiVoucherEmail {
  /**
   * Email address to which the voucher will be sent. Only one address is allowed.
   * @type {string}
   * @memberof ApiVoucherEmail
   */
  'to'?: string
  /**
   * Email address that will appear as sender of the email. If not used, the default value is noreply@hotelbeds.com
   * @type {string}
   * @memberof ApiVoucherEmail
   */
  'from'?: string
  /**
   * Email subject. If not used, the default subject will have the following structure: Voucher - {{bookingReference}} - {{hotelName}}.
   * @type {string}
   * @memberof ApiVoucherEmail
   */
  'title'?: string
  /**
   * Body of the voucher email.
   * @type {string}
   * @memberof ApiVoucherEmail
   */
  'body'?: string
}
/**
 * Request of Availability operation.
 * @export
 * @interface AvailabilityRQ
 */
export interface AvailabilityRQ {
  /**
   *
   * @type {ApiStay}
   * @memberof AvailabilityRQ
   */
  'stay': ApiStay
  /**
   *
   * @type {ApiGeoLocation}
   * @memberof AvailabilityRQ
   */
  'geolocation'?: ApiGeoLocation
  /**
   *
   * @type {ApiFilter}
   * @memberof AvailabilityRQ
   */
  'filter'?: ApiFilter
  /**
   *
   * @type {ApiBoards}
   * @memberof AvailabilityRQ
   */
  'boards'?: ApiBoards
  /**
   *
   * @type {ApiRooms}
   * @memberof AvailabilityRQ
   */
  'rooms'?: ApiRooms
  /**
   * Displays price breakdown per each day of the hotel stay.
   * @type {boolean}
   * @memberof AvailabilityRQ
   */
  'dailyRate'?: boolean
  /**
   * Hotelbeds Group client source market.
   * @type {string}
   * @memberof AvailabilityRQ
   */
  'sourceMarket'?: string
  /**
   * Tags the request for CacheAPI users (NOTE: MANDATORY for this users when filtering by contract).
   * @type {boolean}
   * @memberof AvailabilityRQ
   */
  'aifUse'?: boolean
  /**
   * Defines the platform for multiclient developer platforms.
   * @type {number}
   * @memberof AvailabilityRQ
   */
  'platform'?: number
  /**
   * Language code that defines the language of the response. English will be used by default if this field is not informed.
   * @type {string}
   * @memberof AvailabilityRQ
   */
  'language'?: string
  /**
   * List of passenger groups for which to request availability.
   * @type {Array<ApiOccupancy>}
   * @memberof AvailabilityRQ
   */
  'occupancies': Array<ApiOccupancy>
  /**
   *
   * @type {ApiKeywordsFilter}
   * @memberof AvailabilityRQ
   */
  'keywords'?: ApiKeywordsFilter
  /**
   *
   * @type {ApiHotelsFilter}
   * @memberof AvailabilityRQ
   */
  'hotels'?: ApiHotelsFilter
  /**
   * Filter for review rating.
   * @type {Array<ApiReviewFilter>}
   * @memberof AvailabilityRQ
   */
  'review'?: Array<ApiReviewFilter>
  /**
   * Filter for accomodation type.
   * @type {Array<string>}
   * @memberof AvailabilityRQ
   */
  'accommodations'?: Array<string>
  /**
   * Includes additional rates that are normally not exposed in the Availability results. NOTE: Be aware that inclusions are not filters and as such all of the regular rates are returned with the normally not included ones.
   * @type {Array<string>}
   * @memberof AvailabilityRQ
   */
  'inclusions'?: Array<AvailabilityRQInclusionsEnum>
}

export const AvailabilityRQInclusionsEnum = {
  ResidentRates: 'RESIDENT_RATES'
} as const

export type AvailabilityRQInclusionsEnum = typeof AvailabilityRQInclusionsEnum[keyof typeof AvailabilityRQInclusionsEnum]

/**
 * Response of Availability operation.
 * @export
 * @interface AvailabilityRS
 */
export interface AvailabilityRS {
  /**
   *
   * @type {string}
   * @memberof AvailabilityRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof AvailabilityRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof AvailabilityRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiHotels}
   * @memberof AvailabilityRS
   */
  'hotels'?: ApiHotels
}
/**
 * Query parameters of BookingCancellation operation.
 * @export
 * @interface BookingCancellationQR
 */
export interface BookingCancellationQR {
  /**
   * Type of cancellation method to be used.
   * @type {'CANCELLATION' | 'SIMULATION'}
   * @memberof BookingCancellationQR
   */
  cancellationFlag?: 'CANCELLATION' | 'SIMULATION'
  /**
   * Language in which the description texts will be returned in the response
   * @type {string}
   * @memberof BookingCancellationQR
   */
  language?: string
}
/**
 * Response of BookingCancellation operation.
 * @export
 * @interface BookingCancellationRS
 */
export interface BookingCancellationRS {
  /**
   *
   * @type {string}
   * @memberof BookingCancellationRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof BookingCancellationRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof BookingCancellationRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiBooking}
   * @memberof BookingCancellationRS
   */
  'booking'?: ApiBooking
}
/**
 * Request of BookingChange operation.
 * @export
 * @interface BookingChangeRQ
 */
export interface BookingChangeRQ {
  /**
   *
   * @type {string}
   * @memberof BookingChangeRQ
   * @deprecated
   */
  'bookingId'?: string
  /**
   * Defines if the operation will be a simulation or an actual modification.
   * @type {string}
   * @memberof BookingChangeRQ
   */
  'mode': BookingChangeRQModeEnum
  /**
   *
   * @type {ApiPaymentData}
   * @memberof BookingChangeRQ
   */
  'paymentData'?: ApiPaymentData
  /**
   * Language code that defines the language of the response. English will be used by default if this field is not informed.
   * @type {string}
   * @memberof BookingChangeRQ
   */
  'language'?: string
  /**
   *
   * @type {ApiBooking}
   * @memberof BookingChangeRQ
   */
  'booking': ApiBooking
}

export const BookingChangeRQModeEnum = {
  Simulation: 'SIMULATION',
  Update: 'UPDATE'
} as const

export type BookingChangeRQModeEnum = typeof BookingChangeRQModeEnum[keyof typeof BookingChangeRQModeEnum]

/**
 * Response of BookingChange operation.
 * @export
 * @interface BookingChangeRS
 */
export interface BookingChangeRS {
  /**
   *
   * @type {string}
   * @memberof BookingChangeRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof BookingChangeRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof BookingChangeRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiBooking}
   * @memberof BookingChangeRS
   */
  'booking'?: ApiBooking
}
/**
 * Query parameters of BookingDetail operation.
 * @export
 * @interface BookingDetailQR
 */
export interface BookingDetailQR {
  /**
   * Language code that defines the language of the response. English will be used by default if this parameter is not informed.
   * @type {string}
   * @memberof BookingDetailQR
   */
  language?: string
}
/**
 * Response of BookingDetail operation.
 * @export
 * @interface BookingDetailRS
 */
export interface BookingDetailRS {
  /**
   *
   * @type {string}
   * @memberof BookingDetailRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof BookingDetailRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof BookingDetailRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiBooking}
   * @memberof BookingDetailRS
   */
  'booking'?: ApiBooking
}
/**
 * Query parameters of BookingList operation.
 * @export
 * @interface BookingListQR
 */
export interface BookingListQR {
  /**
   * Defines the lowest value of the range of bookings to be returned.
   * @type {number}
   * @memberof BookingListQR
   */
  from: number
  /**
   * Defines the highest value of the range of bookings to be returned.
   * @type {number}
   * @memberof BookingListQR
   */
  to: number
  /**
   * Defines the starting date of the range of bookings to be returned.
   * @type {string}
   * @memberof BookingListQR
   */
  start: string
  /**
   * Defines the ending date of the range of bookings to be returned. value.
   * @type {string}
   * @memberof BookingListQR
   */
  end: string
  /**
   * Parameter used to define wether ** start** and ** end** fields are filtering by check-in date or by booking creation date.
   * @type {'CHECKIN' | 'CREATION'}
   * @memberof BookingListQR
   */
  filterType?: 'CHECKIN' | 'CREATION'
  /**
   * Parameter used to filter results by status. Can be used to include or exclude cancelled bookings.
   * @type {'ALL' | 'CONFIRMED' | 'CANCELLED'}
   * @memberof BookingListQR
   */
  status?: 'ALL' | 'CONFIRMED' | 'CANCELLED'
  /**
   * Parameter to filter the result by the __clientReference__ field of the booking.
   * @type {string}
   * @memberof BookingListQR
   */
  clientReference?: string
  /**
   * Parameter to filter the results by the country code of the hotel. Can include multiple values separated by commas.
   * @type {string}
   * @memberof BookingListQR
   */
  country?: string
  /**
   * Parameter to filter the results by the destination code of the hotel. Can include multiple values separated by commas.
   * @type {string}
   * @memberof BookingListQR
   */
  destination?: string
  /**
   * Parameter to filter the results by the hotel codes. Can include multiple values separated by commas.
   * @type {string}
   * @memberof BookingListQR
   */
  hotel?: string
  /**
   * Extends the information that is shown for each booking, to include tax breakdown, commission, remarks and/or cancellationReference (if applicable).
   * @type {boolean}
   * @memberof BookingListQR
   */
  extend?: boolean
}
/**
 * Response of BookingList operation.
 * @export
 * @interface BookingListRS
 */
export interface BookingListRS {
  /**
   *
   * @type {string}
   * @memberof BookingListRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof BookingListRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof BookingListRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiBookings}
   * @memberof BookingListRS
   */
  'bookings'?: ApiBookings
}
/**
 * Request of Booking operation.
 * @export
 * @interface BookingRQ
 */
export interface BookingRQ {
  /**
   *
   * @type {string}
   * @memberof BookingRQ
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiHolder}
   * @memberof BookingRQ
   */
  'holder': ApiHolder
  /**
   *
   * @type {ApiPaymentData}
   * @memberof BookingRQ
   */
  'paymentData'?: ApiPaymentData
  /**
   * Internal booking reference.
   * @type {string}
   * @memberof BookingRQ
   */
  'clientReference': string
  /**
   * Free text sent to the hotelier. It can be used to request or inform of special requests to hotelier like: “Non-smoking room preferred”, “Twin bed please”, “Upper floor preferred”, “Late arrival”….
   * @type {string}
   * @memberof BookingRQ
   */
  'remark'?: string
  /**
   *
   * @type {ApiVoucher}
   * @memberof BookingRQ
   */
  'voucher'?: ApiVoucher
  /**
   * Margin of price difference (as percentage) accepted when a price difference occurs between Availability/CheckRate and Booking operations. Do not use more than two decimal characters when defining tolerance. Example: to input a tolerance of 5%, you should input 5.00.  NOTE: Authorisation for the use of this tag is subject to prior written agreement with your sales manager
   * @type {number}
   * @memberof BookingRQ
   */
  'tolerance'?: number
  /**
   * Language code that defines the language of the response. English will be used by default if this field is not informed.
   * @type {string}
   * @memberof BookingRQ
   */
  'language'?: string
  /**
   * List of the rooms to be included in the booking.
   * @type {Array<ApiBookingRoom>}
   * @memberof BookingRQ
   */
  'rooms'?: Array<ApiBookingRoom>
}
/**
 * Response of Booking operation.
 * @export
 * @interface BookingRS
 */
export interface BookingRS {
  /**
   *
   * @type {string}
   * @memberof BookingRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof BookingRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof BookingRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiBooking}
   * @memberof BookingRS
   */
  'booking'?: ApiBooking
}
/**
 * Query parameters of BookingReconfirmation operation.
 * @export
 * @interface BookingReconfirmationQR
 */
export interface BookingReconfirmationQR {
  /**
   * Lowest value of the range of bookings with supplierConfirmationCodes to be returned (as in a paginated response).
   * @type {number}
   * @memberof BookingReconfirmationQR
   */
  from: number
  /**
   * Highest value of the range of bookings with supplierConfirmationCodes to be returned (as in a paginated response).
   * @type {number}
   * @memberof BookingReconfirmationQR
   */
  to: number
  /**
   * Date from when the method will start checking reconfirmation numbers. The format must be YYYY-MM-DD. In case of using __start__ and __end__ parameters, the use of __filterType__ parameter is mandatory.
   * @type {string}
   * @memberof BookingReconfirmationQR
   */
  start?: string
  /**
   * Date to when the method will finish checking reconfirmation numbers. The format must be YYYY-MM-DD. In case of using __start__ and __end__ parameters, the use of __filterType__ parameter is mandatory.
   * @type {string}
   * @memberof BookingReconfirmationQR
   */
  end?: string
  /**
   * The parameter is used to identify if the reconfirmation numbers is by check-in date or by reconfirmation date. Values:  * CHECKIN: for the check-in date. * RECONFIRMATION: for the reconfirmation date the booking was included in Hotelbeds systems.  In case of using __filterType__ parameters, the use of __start__ and __end__ parameters is mandatory.
   * @type {'CHECKIN' | 'RECONFIRMATION'}
   * @memberof BookingReconfirmationQR
   */
  filterType?: 'CHECKIN' | 'RECONFIRMATION'
  /**
   * Parameter to filter the results by the booking reference in client API side.Can include multiple values separated by \&quot;,\&quot;. Max 80 values.
   * @type {string}
   * @memberof BookingReconfirmationQR
   */
  clientReference?: string
  /**
   * Parameter to filter the results by the booking reference in Hotelbeds side.Can include multiple values separated by \&quot;,\&quot;. Max 80 values.
   * @type {string}
   * @memberof BookingReconfirmationQR
   */
  references?: string
}
/**
 * Request of CheckRate operation.
 * @export
 * @interface CheckRateRQ
 */
export interface CheckRateRQ {
  /**
   * Parameter to add or remove the upSelling options node to the response.
   * @type {boolean}
   * @memberof CheckRateRQ
   */
  'upselling'?: boolean
  /**
   * Language code that defines the language of the response. English will be used by default if this field is not informed.
   * @type {string}
   * @memberof CheckRateRQ
   */
  'language'?: string
  /**
   * List of rooms to be checked/valuated.
   * @type {Array<ApiBookingRoom>}
   * @memberof CheckRateRQ
   */
  'rooms'?: Array<ApiBookingRoom>
}
/**
 * Response of CheckRate operation.
 * @export
 * @interface CheckRateRS
 */
export interface CheckRateRS {
  /**
   *
   * @type {string}
   * @memberof CheckRateRS
   */
  'echoToken'?: string
  /**
   *
   * @type {ApiAuditData}
   * @memberof CheckRateRS
   */
  'auditData': ApiAuditData
  /**
   *
   * @type {ApiError}
   * @memberof CheckRateRS
   */
  'error'?: ApiError
  /**
   *
   * @type {ApiHotelCheckRate}
   * @memberof CheckRateRS
   */
  'hotel'?: ApiHotelCheckRate
}
/**
 * Provided ThreeDS structure
 * @export
 * @interface InfoProvided
 */
export interface InfoProvided {
  /**
   * Transaction identifier resulting from authentication processing.
   * @type {string}
   * @memberof InfoProvided
   */
  'id': string
  /**
   * Cardholder Authentication Verification Value (CAVV)
   * @type {string}
   * @memberof InfoProvided
   */
  'cavv': string
  /**
   * Electronic Commerce Indicator (ECI). The ECI value is part of the two data elements that indicate the transaction was processed electronically.
   * @type {string}
   * @memberof InfoProvided
   */
  'eci': string
}
/**
 * Information about the room and its associated rates.
 * @export
 * @interface Room
 */
export interface Room {
  /**
   * Booking status of the room.
   * @type {string}
   * @memberof Room
   */
  'status'?: RoomStatusEnum
  /**
   * Room reservation identifier.
   * @type {number}
   * @memberof Room
   */
  'id'?: number
  /**
   * Internal room code.
   * @type {string}
   * @memberof Room
   */
  'code'?: string
  /**
   * Room name/description.
   * @type {string}
   * @memberof Room
   */
  'name'?: string
  /**
   * Booking reference of the booking/room for external supplier bookings.
   * @type {string}
   * @memberof Room
   */
  'supplierReference'?: string
  /**
   * List of paxes for the room.
   * @type {Array<ApiPax>}
   * @memberof Room
   */
  'paxes'?: Array<ApiPax>
  /**
   * List of rates associated to the room.
   * @type {Array<ApiRate>}
   * @memberof Room
   */
  'rates'?: Array<ApiRate>
}

export const RoomStatusEnum = {
  New: 'NEW',
  Preconfirmed: 'PRECONFIRMED',
  Confirmed: 'CONFIRMED',
  ToBeUpdated: 'TO_BE_UPDATED',
  Cancelled: 'CANCELLED',
  ToBeCancelled: 'TO_BE_CANCELLED'
} as const

export type RoomStatusEnum = typeof RoomStatusEnum[keyof typeof RoomStatusEnum]

/**
 * Information about the room and its associated rates.
 * @export
 * @interface RoomCheckRate
 */
export interface RoomCheckRate {
  /**
   * Booking status of the room.
   * @type {string}
   * @memberof RoomCheckRate
   */
  'status'?: RoomCheckRateStatusEnum
  /**
   * Room reservation identifier.
   * @type {number}
   * @memberof RoomCheckRate
   */
  'id'?: number
  /**
   * Internal room code.
   * @type {string}
   * @memberof RoomCheckRate
   */
  'code'?: string
  /**
   * Room name/description.
   * @type {string}
   * @memberof RoomCheckRate
   */
  'name'?: string
  /**
   * Booking reference of the booking/room for external supplier bookings.
   * @type {string}
   * @memberof RoomCheckRate
   */
  'supplierReference'?: string
  /**
   * List of paxes for the room.
   * @type {Array<ApiPax>}
   * @memberof RoomCheckRate
   */
  'paxes'?: Array<ApiPax>
  /**
   * List of rates associated to the room.
   * @type {Array<ApiRateCheckRate>}
   * @memberof RoomCheckRate
   */
  'rates'?: Array<ApiRateCheckRate>
}

export const RoomCheckRateStatusEnum = {
  New: 'NEW',
  Preconfirmed: 'PRECONFIRMED',
  Confirmed: 'CONFIRMED',
  ToBeUpdated: 'TO_BE_UPDATED',
  Cancelled: 'CANCELLED',
  ToBeCancelled: 'TO_BE_CANCELLED'
} as const

export type RoomCheckRateStatusEnum = typeof RoomCheckRateStatusEnum[keyof typeof RoomCheckRateStatusEnum]

/**
 * Mandatory for clients based on Europe using European credit cards.
 * @export
 * @interface ThreeDsData
 */
export interface ThreeDsData {
  /**
   * Use PROVIDED if you have your own integration with a PSP
   * @type {string}
   * @memberof ThreeDsData
   */
  'option': ThreeDsDataOptionEnum
  /**
   * This field contains the 3DS version used for authentication
   * @type {string}
   * @memberof ThreeDsData
   */
  'version': string
  /**
   *
   * @type {InfoProvided}
   * @memberof ThreeDsData
   */
  'infoProvided'?: InfoProvided
}

export const ThreeDsDataOptionEnum = {
  Provided: 'PROVIDED',
  Requested: 'REQUESTED'
} as const

export type ThreeDsDataOptionEnum = typeof ThreeDsDataOptionEnum[keyof typeof ThreeDsDataOptionEnum]
