/**
 * Information on a accommodation type.
 * @export
 * @interface ApiAccommodation
 */
export interface ApiAccommodation {
  /**
   * Code of the accommodation type.
   * @type {string}
   * @memberof ApiAccommodation
   */
  'code'?: string;
  /**
   * Description of the accommodation type.
   * @type {string}
   * @memberof ApiAccommodation
   */
  'typeDescription'?: string;
  /**
   *
   * @type {ApiContent}
   * @memberof ApiAccommodation
   */
  'typeMultiDescription'?: ApiContent;
}
/**
 * Response of Accommodations operation.
 * @export
 * @interface ApiAccommodationsRS
 */
export interface ApiAccommodationsRS {
  /**
   * List of accommodations.
   * @type {Array<ApiAccommodation>}
   * @memberof ApiAccommodationsRS
   */
  'accommodations'?: Array<ApiAccommodation>;
  /**
   *
   * @type {ApiAuditData}
   * @memberof ApiAccommodationsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiAccommodationsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned accommodations.
   * @type {number}
   * @memberof ApiAccommodationsRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned accommodations.
   * @type {number}
   * @memberof ApiAccommodationsRS
   */
  'to'?: number;
  /**
   * Total number of accommodations matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiAccommodationsRS
   */
  'total'?: number;
}
/**
 * Response of Amenities operation.
 * @export
 * @interface ApiAmenitiesRS
 */
export interface ApiAmenitiesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiAmenitiesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiAmenitiesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned amenities.
   * @type {number}
   * @memberof ApiAmenitiesRS
   */
  'from'?: number;
  /**
   * List of amenities.
   * @type {Array<ApiAmenity>}
   * @memberof ApiAmenitiesRS
   */
  'amenities'?: Array<ApiAmenity>;
  /**
   * Highest value of the range of returned amenities.
   * @type {number}
   * @memberof ApiAmenitiesRS
   */
  'to'?: number;
  /**
   * Total number of amenities matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiAmenitiesRS
   */
  'total'?: number;
}
/**
 \*
 * @export
 * @interface ApiAmenity
 */
export interface ApiAmenity {
  /**
   \*
   * @type {number}
   * @memberof ApiAmenity
   */
  'code'?: number;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiAmenity
   */
  'description'?: ApiContent;
}
/**
 * Relevant internal information.
 * @export
 * @interface ApiAuditData
 */
export interface ApiAuditData {
  /**
   * Environment where the request has been sent and processed.
   * @type {string}
   * @memberof ApiAuditData
   */
  'environment'?: string;
  /**
   * Server process time in milliseconds.
   * @type {string}
   * @memberof ApiAuditData
   */
  'processTime'?: string;
  /**
   * Release version identifier.
   * @type {string}
   * @memberof ApiAuditData
   */
  'release'?: string;
  /**
   * IP address of the system host.
   * @type {string}
   * @memberof ApiAuditData
   */
  'requestHost'?: string;
  /**
   * Server code or ID (for internal use).
   * @type {string}
   * @memberof ApiAuditData
   */
  'serverId'?: string;
  /**
   * Date/time when the request has been processed (always in Spanish time).
   * @type {string}
   * @memberof ApiAuditData
   */
  'timestamp'?: string;
}
/**
 * Information on a board.
 * @export
 * @interface ApiBoard
 */
export interface ApiBoard {
  /**
   * Internal code of the board.
   * @type {string}
   * @memberof ApiBoard
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiBoard
   */
  'description'?: ApiContent;
  /**
   * Multilanguage code of the board type.
   * @type {string}
   * @memberof ApiBoard
   */
  'multiLingualCode'?: string;
}
/**
 * Information on a board group.
 * @export
 * @interface ApiBoardGroup
 */
export interface ApiBoardGroup {
  /**
   * Internal code of the board group.
   * @type {string}
   * @memberof ApiBoardGroup
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiBoardGroup
   */
  'description'?: ApiContent;
  /**
   * List of the internal board codes.
   * @type {Array<string>|string}
   * @memberof ApiBoardGroup
   */
  'boards'?: Array<string>|string;
}
/**
 * Response of BoardGroups operation.
 * @export
 * @interface ApiBoardGroupsRS
 */
export interface ApiBoardGroupsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiBoardGroupsRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of board groups.
   * @type {Array<ApiBoardGroup>}
   * @memberof ApiBoardGroupsRS
   */
  'boards'?: Array<ApiBoardGroup>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiBoardGroupsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned board groups.
   * @type {number}
   * @memberof ApiBoardGroupsRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned board groups.
   * @type {number}
   * @memberof ApiBoardGroupsRS
   */
  'to'?: number;
  /**
   * Total number of board groups matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiBoardGroupsRS
   */
  'total'?: number;
}
/**
 * Response of Boards operation.
 * @export
 * @interface ApiBoardsRS
 */
export interface ApiBoardsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiBoardsRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of boards.
   * @type {Array<ApiBoard>}
   * @memberof ApiBoardsRS
   */
  'boards'?: Array<ApiBoard>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiBoardsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned boards.
   * @type {number}
   * @memberof ApiBoardsRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned boards.
   * @type {number}
   * @memberof ApiBoardsRS
   */
  'to'?: number;
  /**
   * Total number of boards matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiBoardsRS
   */
  'total'?: number;
}
/**
 * Response of Categories operation.
 * @export
 * @interface ApiCategoriesRS
 */
export interface ApiCategoriesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiCategoriesRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of categories.
   * @type {Array<ApiCategory>}
   * @memberof ApiCategoriesRS
   */
  'categories'?: Array<ApiCategory>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiCategoriesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned categories.
   * @type {number}
   * @memberof ApiCategoriesRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned categories.
   * @type {number}
   * @memberof ApiCategoriesRS
   */
  'to'?: number;
  /**
   * Total number of categories matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiCategoriesRS
   */
  'total'?: number;
}
/**
 * Information on an accommodation category.
 * @export
 * @interface ApiCategory
 */
export interface ApiCategory {
  /**
   * Code of the type of accommodation to which the category belongs. (apartment, hotel, home, etc.).
   * @type {string}
   * @memberof ApiCategory
   */
  'accommodationType'?: string;
  /**
   * Hotel star rating based on the information provided by the hotel.
   * @type {string}
   * @memberof ApiCategory
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiCategory
   */
  'description'?: ApiContent;
  /**
   * Code of the group to which the category belongs.
   * @type {string}
   * @memberof ApiCategory
   */
  'group'?: string;
  /**
   * Simple category code used for filtering in [Hotel Booking API](/documentation/hotels/booking-api/api-reference/) Availability.
   * @type {number}
   * @memberof ApiCategory
   */
  'simpleCode'?: number;
}
/**
 * Information on a hotelier chain.
 * @export
 * @interface ApiChain
 */
export interface ApiChain {
  /**
   * Code of the chain.
   * @type {string}
   * @memberof ApiChain
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiChain
   */
  'description'?: ApiContent;
}
/**
 * Response of Chains operation.
 * @export
 * @interface ApiChainsRS
 */
export interface ApiChainsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiChainsRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of chains.
   * @type {Array<ApiChain>}
   * @memberof ApiChainsRS
   */
  'chains'?: Array<ApiChain>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiChainsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned chains.
   * @type {number}
   * @memberof ApiChainsRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned chains.
   * @type {number}
   * @memberof ApiChainsRS
   */
  'to'?: number;
  /**
   * Total number of chains matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiChainsRS
   */
  'total'?: number;
}
/**
 \*
 * @export
 * @interface ApiContent
 */
export interface ApiContent {
  /**
   * Text description, provided in the language defined in LanguageCode field.
   * @type {string}
   * @memberof ApiContent
   */
  'content'?: string;
  /**
   * Code of the language in which the description is returned.
   * @type {string}
   * @memberof ApiContent
   */
  'languageCode'?: string;
}
/**
 * Response of Countries operation.
 * @export
 * @interface ApiCountriesRS
 */
export interface ApiCountriesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiCountriesRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of countries.
   * @type {Array<ApiCountry>}
   * @memberof ApiCountriesRS
   */
  'countries'?: Array<ApiCountry>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiCountriesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned countries.
   * @type {number}
   * @memberof ApiCountriesRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned countries.
   * @type {number}
   * @memberof ApiCountriesRS
   */
  'to'?: number;
  /**
   * Total number of countries matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiCountriesRS
   */
  'total'?: number;
}
/**
 * Country information.
 * @export
 * @interface ApiCountry
 */
export interface ApiCountry {
  /**
   * Hotelbeds internal country code.
   * @type {string}
   * @memberof ApiCountry
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiCountry
   */
  'description'?: ApiContent;
  /**
   * ISO 3166-2 Country Code.
   * @type {string}
   * @memberof ApiCountry
   */
  'isoCode'?: string;
  /**
   * List of states/provinces/territories belonging to the country.
   * @type {Array<ApiState>}
   * @memberof ApiCountry
   */
  'states'?: Array<ApiState>;
}
/**
 * Response of Currencies operation.
 * @export
 * @interface ApiCurrenciesRS
 */
export interface ApiCurrenciesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiCurrenciesRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of currencies.
   * @type {Array<ApiCurrency>}
   * @memberof ApiCurrenciesRS
   */
  'currencies'?: Array<ApiCurrency>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiCurrenciesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned currencies.
   * @type {number}
   * @memberof ApiCurrenciesRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned currencies.
   * @type {number}
   * @memberof ApiCurrenciesRS
   */
  'to'?: number;
  /**
   * Total number of currencies matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiCurrenciesRS
   */
  'total'?: number;
}
/**
 * Currency.
 * @export
 * @interface ApiCurrency
 */
export interface ApiCurrency {
  /**
   * Internal currency code.
   * @type {string}
   * @memberof ApiCurrency
   */
  'code'?: string;
  /**
   * Indication for which rate type will be returned.
   * @type {string}
   * @memberof ApiCurrency
   */
  'currencyType'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiCurrency
   */
  'description'?: ApiContent;
}
/**
 * Information on a destination of the destination tree.
 * @export
 * @interface ApiDestination
 */
export interface ApiDestination {
  /**
   * Code of the destination.
   * @type {string}
   * @memberof ApiDestination
   */
  'code'?: string;
  /**
   * Hotelbeds code for the country
   * @type {string}
   * @memberof ApiDestination
   */
  'countryCode'?: string;
  /**
   * List of groups of zones.
   * @type {Array<ApiGroupZone>}
   * @memberof ApiDestination
   */
  'groupZones'?: Array<ApiGroupZone>;
  /**
   * ISO Country Code.
   * @type {string}
   * @memberof ApiDestination
   */
  'isoCode'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiDestination
   */
  'name'?: ApiContent;
  /**
   * List of zones in which the destination is divided.
   * @type {Array<ApiZone>}
   * @memberof ApiDestination
   */
  'zones'?: Array<ApiZone>;
}
/**
 * Response of Destinations operation.
 * @export
 * @interface ApiDestinationsRS
 */
export interface ApiDestinationsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiDestinationsRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of available destinations.
   * @type {Array<ApiDestination>}
   * @memberof ApiDestinationsRS
   */
  'destinations'?: Array<ApiDestination>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiDestinationsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned destinations.
   * @type {number}
   * @memberof ApiDestinationsRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned destinations.
   * @type {number}
   * @memberof ApiDestinationsRS
   */
  'to'?: number;
  /**
   * Total number of destinations matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiDestinationsRS
   */
  'total'?: number;
}
/**
 * Response of Facilities operation.
 * @export
 * @interface ApiFacilitiesRS
 */
export interface ApiFacilitiesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiFacilitiesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiFacilitiesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * List of facilities.
   * @type {Array<ApiFacility>}
   * @memberof ApiFacilitiesRS
   */
  'facilities'?: Array<ApiFacility>;
  /**
   * Lowest value of the range of returned facilities.
   * @type {number}
   * @memberof ApiFacilitiesRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned facilities.
   * @type {number}
   * @memberof ApiFacilitiesRS
   */
  'to'?: number;
  /**
   * Total number of facilities matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiFacilitiesRS
   */
  'total'?: number;
}
/**
 * Information on a hotel facility.
 * @export
 * @interface ApiFacility
 */
export interface ApiFacility {
  /**
   * Code of the facility.
   * @type {number}
   * @memberof ApiFacility
   */
  'code'?: number;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiFacility
   */
  'description'?: ApiContent;
  /**
   * Group the facility belongs to.
   * @type {number}
   * @memberof ApiFacility
   */
  'facilityGroupCode'?: number;
  /**
   * Typology of the facility which determines the fields to receive in the hotels operation.
   * @type {number}
   * @memberof ApiFacility
   */
  'facilityTypologyCode'?: number;
}
/**
 * Information on a group of facilities.
 * @export
 * @interface ApiFacilityGroup
 */
export interface ApiFacilityGroup {
  /**
   * Code of the facility group.
   * @type {number}
   * @memberof ApiFacilityGroup
   */
  'code'?: number;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiFacilityGroup
   */
  'description'?: ApiContent;
}
/**
 * Response of FacilityGroups operation.
 * @export
 * @interface ApiFacilityGroupsRS
 */
export interface ApiFacilityGroupsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiFacilityGroupsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiFacilityGroupsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * List of groups of facilities.
   * @type {Array<ApiFacilityGroup>}
   * @memberof ApiFacilityGroupsRS
   */
  'facilityGroups'?: Array<ApiFacilityGroup>;
  /**
   * Lowest value of the range of returned facility groups.
   * @type {number}
   * @memberof ApiFacilityGroupsRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned facility groups.
   * @type {number}
   * @memberof ApiFacilityGroupsRS
   */
  'to'?: number;
  /**
   * Total number of facility groups matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiFacilityGroupsRS
   */
  'total'?: number;
}
/**
 * Classification information of facilities.
 * @export
 * @interface ApiFacilityType
 */
export interface ApiFacilityType {
  /**
   * Indicator if the ageFrom Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'ageFromFlag'?: boolean;
  /**
   * Indicator if the ageTo Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'ageToFlag'?: boolean;
  /**
   * Indicator if the amount Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'amountFlag'?: boolean;
  /**
   * Indicator if the appType Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'appTypeFlag'?: boolean;
  /**
   * Code of the typology.
   * @type {number}
   * @memberof ApiFacilityType
   */
  'code'?: number;
  /**
   * Indicator if the currency Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'currencyFlag'?: boolean;
  /**
   * Indicator if the dateFrom Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'dateFromFlag'?: boolean;
  /**
   * Indicator if the dateTo Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'dateToFlag'?: boolean;
  /**
   * Indicator if the distance Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'distanceFlag'?: boolean;
  /**
   * Indicator if the Fee Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'feeFlag'?: boolean;
  /**
   * Indicator if the YesOrNo Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'indYesOrNoFlag'?: boolean;
  /**
   * Indicator if the Logic Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'logicFlag'?: boolean;
  /**
   * Indicator if the Number Value will be returned
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'numberFlag'?: boolean;
  /**
   * Indicator if the Text Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'textFlag'?: boolean;
  /**
   * Indicator if the timeFrom Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'timeFromFlag'?: boolean;
  /**
   * Indicator if the timeTo Value will be returned.
   * @type {boolean}
   * @memberof ApiFacilityType
   */
  'timeToFlag'?: boolean;
}
/**
 * Response of FacilityTypologies operation.
 * @export
 * @interface ApiFacilityTypologiesRS
 */
export interface ApiFacilityTypologiesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiFacilityTypologiesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiFacilityTypologiesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * List of classifications for facilities.
   * @type {Array<ApiFacilityType>}
   * @memberof ApiFacilityTypologiesRS
   */
  'facilityTypologies'?: Array<ApiFacilityType>;
  /**
   * Lowest value of the range of returned facility typologies.
   * @type {number}
   * @memberof ApiFacilityTypologiesRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned facility typologies.
   * @type {number}
   * @memberof ApiFacilityTypologiesRS
   */
  'to'?: number;
  /**
   * Total number of facility typologies matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiFacilityTypologiesRS
   */
  'total'?: number;
}
/**
 * Defines the geolocation data.
 * @export
 * @interface ApiGeoLocation
 */
export interface ApiGeoLocation {
  /**
   * Latitude coordinate for geolocation search.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'latitude'?: number;
  /**
   * Longitude coordinate for geolocation search.
   * @type {number}
   * @memberof ApiGeoLocation
   */
  'longitude'?: number;
}
/**
 * Response of GroupCategories operation.
 * @export
 * @interface ApiGroupCategoriesRS
 */
export interface ApiGroupCategoriesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiGroupCategoriesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiGroupCategoriesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned group categories.
   * @type {number}
   * @memberof ApiGroupCategoriesRS
   */
  'from'?: number;
  /**
   * List of group categories.
   * @type {Array<ApiGroupCategory>}
   * @memberof ApiGroupCategoriesRS
   */
  'groupCategories'?: Array<ApiGroupCategory>;
  /**
   * Highest value of the range of returned group categories.
   * @type {number}
   * @memberof ApiGroupCategoriesRS
   */
  'to'?: number;
  /**
   * Total number of group categories matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiGroupCategoriesRS
   */
  'total'?: number;
}
/**
 * Information of a group of categories.
 * @export
 * @interface ApiGroupCategory
 */
export interface ApiGroupCategory {
  /**
   * Code of the category group.
   * @type {string}
   * @memberof ApiGroupCategory
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiGroupCategory
   */
  'description'?: ApiContent;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiGroupCategory
   */
  'name'?: ApiContent;
  /**
   * Internal order of the category group.
   * @type {number}
   * @memberof ApiGroupCategory
   */
  'order'?: number;
}
/**
 * Information on a group of zones
 * @export
 * @interface ApiGroupZone
 */
export interface ApiGroupZone {
  /**
   * Code of the group of zones.
   * @type {string}
   * @memberof ApiGroupZone
   */
  'groupZoneCode'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiGroupZone
   */
  'name'?: ApiContent;
  /**
   * List of zones that belong to the group.
   * @type {Array<number>}
   * @memberof ApiGroupZone
   */
  'zones'?: Array<number>;
}
/**
 * Information on a hotel.
 * @export
 * @interface ApiHotel
 */
export interface ApiHotel {
  /**
   * Health & Safety rating (NOTE: please bear in mind is not related to hotel category).
   * @type {string}
   * @memberof ApiHotel
   */
  'S2C'?: string;
  /**
   \*
   * @type {ApiAccommodation}
   * @memberof ApiHotel
   */
  'accommodationType'?: ApiAccommodation;
  /**
   * Code of the type of accommodation. It will indicate the type of the hotel (apartment, hotel, home, etc.).
   * @type {string}
   * @memberof ApiHotel
   */
  'accommodationTypeCode'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotel
   */
  'address'?: ApiContent;
  /**
   * List of codes of board types offered at the hotel.
   * @type {Array<string>|string}
   * @memberof ApiHotel
   */
  'boardCodes'?: Array<string>|string;
  /**
   * List of boards offered at the hotel.
   * @type {Array<ApiBoard>}
   * @memberof ApiHotel
   */
  'boards'?: Array<ApiBoard>;
  /**
   \*
   * @type {ApiCategory}
   * @memberof ApiHotel
   */
  'category'?: ApiCategory;
  /**
   * Hotel rating based on the information provided by the hotel.
   * @type {string}
   * @memberof ApiHotel
   */
  'categoryCode'?: string;
  /**
   \*
   * @type {ApiGroupCategory}
   * @memberof ApiHotel
   */
  'categoryGroup'?: ApiGroupCategory;
  /**
   * Group name of the category to which the hotel belongs.
   * @type {string}
   * @memberof ApiHotel
   */
  'categoryGroupCode'?: string;
  /**
   \*
   * @type {ApiChain}
   * @memberof ApiHotel
   */
  'chain'?: ApiChain;
  /**
   * Code of the chain that the hotel belongs to.
   * @type {string}
   * @memberof ApiHotel
   */
  'chainCode'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotel
   */
  'city'?: ApiContent;
  /**
   * Hotelbeds internal hotel code.
   * @type {number}
   * @memberof ApiHotel
   */
  'code'?: number;
  /**
   \*
   * @type {ApiGeoLocation}
   * @memberof ApiHotel
   */
  'coordinates'?: ApiGeoLocation;
  /**
   \*
   * @type {ApiCountry}
   * @memberof ApiHotel
   */
  'country'?: ApiCountry;
  /**
   * Code of the country where the hotel is located.
   * @type {string}
   * @memberof ApiHotel
   */
  'countryCode'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotel
   */
  'description'?: ApiContent;
  /**
   \*
   * @type {ApiDestination}
   * @memberof ApiHotel
   */
  'destination'?: ApiDestination;
  /**
   * Code of the destination of the hotel location.
   * @type {string}
   * @memberof ApiHotel
   */
  'destinationCode'?: string;
  /**
   * Hotel e-mail address. More than one email can be returned, separated by \";\" characters.
   * @type {string}
   * @memberof ApiHotel
   */
  'email'?: string;
  /**
   * The value follows a qualitative scale, the number 1 being always the top priority/preferential, and the rest of the product defined by our commercial departments. As of today, the possible values are:   1: Identifies preferential product with exclusive guaranteed availability.   2: Identifies top hotels.   3: Identifies the rest of hotels.   In case new values are added in the future, a proper communication campaign will be carried out to inform you.
   * @type {number}
   * @memberof ApiHotel
   */
  'exclusiveDeal'?: number;
  /**
   * List of facilities, amenities and installations in the hotel.
   * @type {Array<ApiHotelFacility>}
   * @memberof ApiHotel
   */
  'facilities'?: Array<ApiHotelFacility>;
  /**
   * Giata code of the hotel. Will only be returned if the client has agreement with Giata.
   * @type {number}
   * @memberof ApiHotel
   */
  'giataCode'?: number;
  /**
   * List of hotel pictures.
   * @type {Array<ApiImage>}
   * @memberof ApiHotel
   */
  'images'?: Array<ApiImage>;
  /**
   * List of points of interest close to the hotel.
   * @type {Array<ApiHotelPointOfInterest>}
   * @memberof ApiHotel
   */
  'interestPoints'?: Array<ApiHotelPointOfInterest>;
  /**
   * List of issues affecting the hotel.
   * @type {Array<ApiHotelIssue>}
   * @memberof ApiHotel
   */
  'issues'?: Array<ApiHotelIssue>;
  /**
   * Date of the last update in the information of the hotel.
   * @type {string}
   * @memberof ApiHotel
   */
  'lastUpdate'?: string;
  /**
   * Accommodation registration number.
   * @type {string}
   * @memberof ApiHotel
   */
  'license'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotel
   */
  'name'?: ApiContent;
  /**
   * List of contact phones of the hotel.
   * @type {Array<ApiHotelPhone>}
   * @memberof ApiHotel
   */
  'phones'?: Array<ApiHotelPhone>;
  /**
   * Hotel address postal code.
   * @type {string}
   * @memberof ApiHotel
   */
  'postalCode'?: string;
  /**
   * Hotelbeds internal sorting ranking (NOTE: please bear in mind is not related to hotel category).
   * @type {number}
   * @memberof ApiHotel
   */
  'ranking'?: number;
  /**
   * List of available rooms types at the hotel.
   * @type {Array<ApiHotelRoom>}
   * @memberof ApiHotel
   */
  'rooms'?: Array<ApiHotelRoom>;
  /**
   * List of the internal segment codes.
   * @type {Array<number>}
   * @memberof ApiHotel
   */
  'segmentCodes'?: Array<number>;
  /**
   * List of segments.
   * @type {Array<ApiSegment>}
   * @memberof ApiHotel
   */
  'segments'?: Array<ApiSegment>;
  /**
   * List of the internal amenity codes.
   * @type {Array<number>}
   * @memberof ApiHotel
   */
  'amenityCodes'?: Array<number>;
  /**
   * List of amenities.
   * @type {Array<ApiAmenity>}
   * @memberof ApiHotel
   */
  'amenities'?: Array<ApiAmenity>;
  /**
   \*
   * @type {ApiState}
   * @memberof ApiHotel
   */
  'state'?: ApiState;
  /**
   * Internal code of the state.
   * @type {string}
   * @memberof ApiHotel
   */
  'stateCode'?: string;
  /**
   * List of terminals associated to the hotel and their distance to the hotel.
   * @type {Array<ApiHotelTerminal>}
   * @memberof ApiHotel
   */
  'terminals'?: Array<ApiHotelTerminal>;
  /**
   * Website URL of the hotel or the chain.
   * @type {string}
   * @memberof ApiHotel
   */
  'web'?: string;
  /**
   * List of wildcard rooms.
   * @type {Array<ApiWildCard>}
   * @memberof ApiHotel
   */
  'wildcards'?: Array<ApiWildCard>;
  /**
   \*
   * @type {ApiZone}
   * @memberof ApiHotel
   */
  'zone'?: ApiZone;
  /**
   * Internal zone code, where the hotel is located.
   * @type {number}
   * @memberof ApiHotel
   */
  'zoneCode'?: number;
}
/**
 * Response of HotelDetails operation
 * @export
 * @interface ApiHotelDetailsRS
 */
export interface ApiHotelDetailsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiHotelDetailsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiHotelDetailsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned hotels.
   * @type {number}
   * @memberof ApiHotelDetailsRS
   */
  'from'?: number;
  /**
   \*
   * @type {ApiHotel}
   * @memberof ApiHotelDetailsRS
   */
  'hotel'?: ApiHotel;
  /**
   * List of returned hotels matching the parameters used in the request.
   * @type {Array<ApiHotel>}
   * @memberof ApiHotelDetailsRS
   */
  'hotels'?: Array<ApiHotel>;
  /**
   * Highest value of the range of returned hotels.
   * @type {number}
   * @memberof ApiHotelDetailsRS
   */
  'to'?: number;
  /**
   * Total number of hotels matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiHotelDetailsRS
   */
  'total'?: number;
}
/**
 * Information on a hotel facility.
 * @export
 * @interface ApiHotelFacility
 */
export interface ApiHotelFacility {
  /**
   * Minimum age to access the facility.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'ageFrom'?: number;
  /**
   * Maximum age to access the facility.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'ageTo'?: number;
  /**
   * Amount of the facility fee.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'amount'?: number;
  /**
   * Application type of the facility fee.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'applicationType'?: string;
  /**
   * Currency of the facility fee.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'currency'?: string;
  /**
   * Date from which the facility is available.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'dateFrom'?: string;
  /**
   * Date until which the installation is available.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'dateTo'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotelFacility
   */
  'description'?: ApiContent;
  /**
   * Distance in meters to the facility.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'distance'?: number;
  /**
   * Code of the facility.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'facilityCode'?: number;
  /**
   * Group to which the facility belongs.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'facilityGroupCode'?: number;
  /**
   * Name of the facility.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'facilityName'?: string;
  /**
   * Defines if the facility has cost or not at the establishment.
   * @type {boolean}
   * @memberof ApiHotelFacility
   */
  'indFee'?: boolean;
  /**
   * Indicates if the facility exists at the hotel. This field will be returned __only__ when the facility is at the hotel.
   * @type {boolean}
   * @memberof ApiHotelFacility
   */
  'indLogic'?: boolean;
  /**
   * Indicates in the mandatory facility exists at the hotel or not.
   * @type {boolean}
   * @memberof ApiHotelFacility
   */
  'indYesOrNo'?: boolean;
  /**
   * Numeric value of the facility.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'number'?: number;
  /**
   * Order of facility in case there is more than one facility at the hotel.
   * @type {number}
   * @memberof ApiHotelFacility
   */
  'order'?: number;
  /**
   * Time from which the facility is available.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'timeFrom'?: string;
  /**
   * Time until which the facility is available.
   * @type {string}
   * @memberof ApiHotelFacility
   */
  'timeTo'?: string;
  /**
   * Indicates if the use of the facility will issue a voucher.
   * @type {boolean}
   * @memberof ApiHotelFacility
   */
  'voucher'?: boolean;
}
/**
 * Information on an hotel issue (repair works, facilities closed,...).
 * @export
 * @interface ApiHotelIssue
 */
export interface ApiHotelIssue {
  /**
   * Indicator if there will be an alternative due to the issue.
   * @type {boolean}
   * @memberof ApiHotelIssue
   */
  'alternative'?: boolean;
  /**
   * Date from when the issue will start.
   * @type {string}
   * @memberof ApiHotelIssue
   */
  'dateFrom'?: string;
  /**
   * Date when the issue will end.
   * @type {string}
   * @memberof ApiHotelIssue
   */
  'dateTo'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotelIssue
   */
  'description'?: ApiContent;
  /**
   * Code of the issue.
   * @type {string}
   * @memberof ApiHotelIssue
   */
  'issueCode'?: string;
  /**
   * Code of the type of incidence.
   * @type {string}
   * @memberof ApiHotelIssue
   */
  'issueType'?: string;
  /**
   * Issue order, in case there is more than one.
   * @type {number}
   * @memberof ApiHotelIssue
   */
  'order'?: number;
}
/**
 * Information on a hotel phone line.
 * @export
 * @interface ApiHotelPhone
 */
export interface ApiHotelPhone {
  /**
   * Phone number.
   * @type {string}
   * @memberof ApiHotelPhone
   */
  'phoneNumber'?: string;
  /**
   * Type of phone line (phonebooking, phonehotel, faxnumber...).
   * @type {string}
   * @memberof ApiHotelPhone
   */
  'phoneType'?: string;
}
/**
 * Information on a point of interest near a hotel.
 * @export
 * @interface ApiHotelPointOfInterest
 */
export interface ApiHotelPointOfInterest {
  /**
   * Distance in meters to the point of interest.
   * @type {string}
   * @memberof ApiHotelPointOfInterest
   */
  'distance'?: string;
  /**
   * Code of the point of interest as a facility.
   * @type {number}
   * @memberof ApiHotelPointOfInterest
   */
  'facilityCode'?: number;
  /**
   * Group to which the point of interest belongs as a facility.
   * @type {number}
   * @memberof ApiHotelPointOfInterest
   */
  'facilityGroupCode'?: number;
  /**
   * Defines if there is a fee to access the point of interest.
   * @type {boolean}
   * @memberof ApiHotelPointOfInterest
   */
  'fee'?: boolean;
  /**
   * Order of the point of interest.
   * @type {number}
   * @memberof ApiHotelPointOfInterest
   */
  'order'?: number;
  /**
   * Name of the point of interest.
   * @type {string}
   * @memberof ApiHotelPointOfInterest
   */
  'poiName'?: string;
}
/**
 * Information of the hotel room.
 * @export
 * @interface ApiHotelRoom
 */
export interface ApiHotelRoom {
  /**
   * Characteristic code/s of the room.
   * @type {string}
   * @memberof ApiHotelRoom
   */
  'characteristicCode'?: string;
  /**
   * Description of the room.
   * @type {string}
   * @memberof ApiHotelRoom
   */
  'description'?: string;
  /**
   * Identifier of the room type.
   * @type {string}
   * @memberof ApiHotelRoom
   */
  'roomCode'?: string;
  /**
   * List of facilities, amenities and installations in the room of the hotel.
   * @type {Array<ApiHotelRoomFacility>}
   * @memberof ApiHotelRoom
   */
  'roomFacilities'?: Array<ApiHotelRoomFacility>;
  /**
   * List of the different departments in which the room is divided.
   * @type {Array<ApiHotelRoomStay>}
   * @memberof ApiHotelRoom
   */
  'roomStays'?: Array<ApiHotelRoomStay>;
  /**
   * Internal room type code. Returned only for Unified clients.
   * @type {string}
   * @memberof ApiHotelRoom
   */
  'roomType'?: string;
}
/**
 * Information on facilities and features associated to a hotel room.
 * @export
 * @interface ApiHotelRoomFacility
 */
export interface ApiHotelRoomFacility {
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotelRoomFacility
   */
  'description'?: ApiContent;
  /**
   * Code of the facility.
   * @type {number}
   * @memberof ApiHotelRoomFacility
   */
  'facilityCode'?: number;
  /**
   * Code of the group to which the facility belongs.
   * @type {number}
   * @memberof ApiHotelRoomFacility
   */
  'facilityGroupCode'?: number;
  /**
   * Indicator if the facility has cost or not at the establishment.
   * @type {boolean}
   * @memberof ApiHotelRoomFacility
   */
  'indFee'?: boolean;
  /**
   * Indicator if the facility exists at the hotel or not.
   * @type {boolean}
   * @memberof ApiHotelRoomFacility
   */
  'indLogic'?: boolean;
  /**
   * Indicator if the mandatory facility exists at the hotel or not.
   * @type {boolean}
   * @memberof ApiHotelRoomFacility
   */
  'indYesOrNo'?: boolean;
  /**
   * Numeric value of the facility.
   * @type {number}
   * @memberof ApiHotelRoomFacility
   */
  'number'?: number;
  /**
   * Order of facility in case there is more than one facility at the hotel.
   * @type {number}
   * @memberof ApiHotelRoomFacility
   */
  'order'?: number;
  /**
   * Indicates if the use of the facility will issue a voucher.
   * @type {boolean}
   * @memberof ApiHotelRoomFacility
   */
  'voucher'?: boolean;
}
/**
 * Describes one of the departments in which the room is divided.
 * @export
 * @interface ApiHotelRoomStay
 */
export interface ApiHotelRoomStay {
  /**
   * Description of the type of department.
   * @type {string}
   * @memberof ApiHotelRoomStay
   */
  'description'?: string;
  /**
   * Numeric position of the department within the room.
   * @type {string}
   * @memberof ApiHotelRoomStay
   */
  'order'?: string;
  /**
   * Describes facilities associated to the department.
   * @type {Array<ApiHotelRoomStayFacility>}
   * @memberof ApiHotelRoomStay
   */
  'roomStayFacilities'?: Array<ApiHotelRoomStayFacility>;
  /**
   * Code of the Department Type.
   * @type {string}
   * @memberof ApiHotelRoomStay
   */
  'stayType'?: string;
}
/**
 * Information on facilities and features in the RoomStays.
 * @export
 * @interface ApiHotelRoomStayFacility
 */
export interface ApiHotelRoomStayFacility {
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotelRoomStayFacility
   */
  'description'?: ApiContent;
  /**
   * Code of the facility.
   * @type {number}
   * @memberof ApiHotelRoomStayFacility
   */
  'facilityCode'?: number;
  /**
   * Code of the group the facility belongs to.
   * @type {number}
   * @memberof ApiHotelRoomStayFacility
   */
  'facilityGroupCode'?: number;
  /**
   * Number of facilities.
   * @type {number}
   * @memberof ApiHotelRoomStayFacility
   */
  'number'?: number;
}
/**
 * Info of a terminal.
 * @export
 * @interface ApiHotelTerminal
 */
export interface ApiHotelTerminal {
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotelTerminal
   */
  'description'?: ApiContent;
  /**
   * Distance in kilometers to the hotel.
   * @type {number}
   * @memberof ApiHotelTerminal
   */
  'distance'?: number;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiHotelTerminal
   */
  'name'?: ApiContent;
  /**
   * Code of the terminal.
   * @type {string}
   * @memberof ApiHotelTerminal
   */
  'terminalCode'?: string;
  /**
   * Code of the type of the terminal.
   * @type {string}
   * @memberof ApiHotelTerminal
   */
  'terminalType'?: string;
}
/**
 * Information on the error. Only returned in case of error. Includes the echotoken for debugging purposes.
 * @export
 * @interface ApiHotelbedsError
 */
export interface ApiHotelbedsError {
  /**
   * Internal token code of the error.
   * @type {string}
   * @memberof ApiHotelbedsError
   */
  'code'?: string;
  /**
   * Descriptive message of the cause of the error.
   * @type {string}
   * @memberof ApiHotelbedsError
   */
  'message'?: string;
}
/**
 * Response of Hotels operation
 * @export
 * @interface ApiHotelsRS
 */
export interface ApiHotelsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiHotelsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiHotelsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned hotels.
   * @type {number}
   * @memberof ApiHotelsRS
   */
  'from'?: number;
  /**
   * List of returned hotels matching the parameters used in the request.
   * @type {Array<ApiHotel>}
   * @memberof ApiHotelsRS
   */
  'hotels'?: Array<ApiHotel>;
  /**
   * Highest value of the range of returned hotels.
   * @type {number}
   * @memberof ApiHotelsRS
   */
  'to'?: number;
  /**
   * Total number of hotels matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiHotelsRS
   */
  'total'?: number;
}
/**
 * Describes an hotel picture.
 * @export
 * @interface ApiImage
 */
export interface ApiImage {
  /**
   * Characteristic code/s of the room.
   * @type {string}
   * @memberof ApiImage
   */
  'characteristicCode'?: string;
  /**
   * Specifies where has the picture been taken (you can see the possible values in the response of types/imagetypes operation).
   * @type {string}
   * @memberof ApiImage
   */
  'imageTypeCode'?: string;
  /**
   * Order in which the images are shown in the web page.
   * @type {number}
   * @memberof ApiImage
   */
  'order'?: number;
  /**
   * URL of the image. For hotel images, we do not return the full path. Note that one of the following paths must be added by the client.
   * @type {string}
   * @memberof ApiImage
   */
  'path'?: string;
  /**
   * Identifier of the room type.
   * @type {string}
   * @memberof ApiImage
   */
  'roomCode'?: string;
  /**
   * Internal Room type code, returned only for Unified clients.
   * @type {string}
   * @memberof ApiImage
   */
  'roomType'?: string;
  /**
   \*
   * @type {ApiImageType}
   * @memberof ApiImage
   */
  'type'?: ApiImageType;
  /**
   * Ordinal value at which the image should be presented.
   * @type {number}
   * @memberof ApiImage
   */
  'visualOrder'?: number;
  /**
   * Original hotel room code, directly sourced from the property
   * @type {string}
   * @memberof ApiImage
   */
  'PMSRoomCode'?: string;
}
/**
 * Information on an hotel image type.
 * @export
 * @interface ApiImageType
 */
export interface ApiImageType {
  /**
   * Code of the type of the image.
   * @type {string}
   * @memberof ApiImageType
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiImageType
   */
  'description'?: ApiContent;
}
/**
 * Response of ImageTypes operation.
 * @export
 * @interface ApiImageTypesRS
 */
export interface ApiImageTypesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiImageTypesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiImageTypesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned image types.
   * @type {number}
   * @memberof ApiImageTypesRS
   */
  'from'?: number;
  /**
   * List of image types.
   * @type {Array<ApiImageType>}
   * @memberof ApiImageTypesRS
   */
  'imageTypes'?: Array<ApiImageType>;
  /**
   * Highest value of the range of returned image types.
   * @type {number}
   * @memberof ApiImageTypesRS
   */
  'to'?: number;
  /**
   * Total number of image types matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiImageTypesRS
   */
  'total'?: number;
}
/**
 * Information on an issue type (repair works, facilities closed,...).
 * @export
 * @interface ApiIssue
 */
export interface ApiIssue {
  /**
   * Indicator if there will be an alternative due to the issue.
   * @type {boolean}
   * @memberof ApiIssue
   */
  'alternative'?: boolean;
  /**
   * Code of the issue.
   * @type {string}
   * @memberof ApiIssue
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiIssue
   */
  'description'?: ApiContent;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiIssue
   */
  'name'?: ApiContent;
  /**
   * Code of the type of incidence.
   * @type {string}
   * @memberof ApiIssue
   */
  'type'?: string;
}
/**
 * Response of Issues operation.
 * @export
 * @interface ApiIssuesRS
 */
export interface ApiIssuesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiIssuesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiIssuesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned issues.
   * @type {number}
   * @memberof ApiIssuesRS
   */
  'from'?: number;
  /**
   * List of issues that can affect an hotel and its facilities.
   * @type {Array<ApiIssue>}
   * @memberof ApiIssuesRS
   */
  'issues'?: Array<ApiIssue>;
  /**
   * Highest value of the range of returned issues.
   * @type {number}
   * @memberof ApiIssuesRS
   */
  'to'?: number;
  /**
   * Total number of issues matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiIssuesRS
   */
  'total'?: number;
}
/**
 * Information on a language.
 * @export
 * @interface ApiLanguage
 */
export interface ApiLanguage {
  /**
   * Code of the language.
   * @type {string}
   * @memberof ApiLanguage
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiLanguage
   */
  'description'?: ApiContent;
  /**
   * Name of the language on its own language.
   * @type {string}
   * @memberof ApiLanguage
   */
  'name'?: string;
}
/**
 * Response of Languages operation.
 * @export
 * @interface ApiLanguagesRS
 */
export interface ApiLanguagesRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiLanguagesRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiLanguagesRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned languages.
   * @type {number}
   * @memberof ApiLanguagesRS
   */
  'from'?: number;
  /**
   * List of languages.
   * @type {Array<ApiLanguage>}
   * @memberof ApiLanguagesRS
   */
  'languages'?: Array<ApiLanguage>;
  /**
   * Highest value of the range of returned languages.
   * @type {number}
   * @memberof ApiLanguagesRS
   */
  'to'?: number;
  /**
   * Total number of languages matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiLanguagesRS
   */
  'total'?: number;
}
/**
 * Information of a promotion that can be applied to hotels rates.
 * @export
 * @interface ApiPromotion
 */
export interface ApiPromotion {
  /**
   * Internal Promotion code.
   * @type {string}
   * @memberof ApiPromotion
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiPromotion
   */
  'description'?: ApiContent;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiPromotion
   */
  'name'?: ApiContent;
}
/**
 * Response of Promotions operation.
 * @export
 * @interface ApiPromotionsRS
 */
export interface ApiPromotionsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiPromotionsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiPromotionsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned promotions.
   * @type {number}
   * @memberof ApiPromotionsRS
   */
  'from'?: number;
  /**
   * List of promotions.
   * @type {Array<ApiPromotion>}
   * @memberof ApiPromotionsRS
   */
  'promotions'?: Array<ApiPromotion>;
  /**
   * Highest value of the range of returned promotions.
   * @type {number}
   * @memberof ApiPromotionsRS
   */
  'to'?: number;
  /**
   * Total number of promotions matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiPromotionsRS
   */
  'total'?: number;
}
/**
 * Information on a rateClass.
 * @export
 * @interface ApiRateClass
 */
export interface ApiRateClass {
  /**
   * Code of rateClass.
   * @type {string}
   * @memberof ApiRateClass
   */
  'code'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiRateClass
   */
  'description'?: ApiContent;
}
/**
 * Returns the list of available values for the rateClass.
 * @export
 * @interface ApiRateClassRS
 */
export interface ApiRateClassRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiRateClassRS
   */
  'auditData'?: ApiAuditData;
  /**
   * List of rateClass.
   * @type {Array<ApiRateClass>}
   * @memberof ApiRateClassRS
   */
  'classifications'?: Array<ApiRateClass>;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiRateClassRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned rateclass.
   * @type {number}
   * @memberof ApiRateClassRS
   */
  'from'?: number;
  /**
   * Highest value of the range of returned rateclass.
   * @type {number}
   * @memberof ApiRateClassRS
   */
  'to'?: number;
  /**
   * Total number of rateclass matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiRateClassRS
   */
  'total'?: number;
}
/**
 * Definition of the rate comment.
 * @export
 * @interface ApiRateComment
 */
export interface ApiRateComment {
  /**
   * Final date of application of the comment.
   * @type {string}
   * @memberof ApiRateComment
   */
  'dateEnd'?: string;
  /**
   * Date from which the comment starts to apply.
   * @type {string}
   * @memberof ApiRateComment
   */
  'dateStart'?: string;
  /**
   * Rate comments description and language.
   * @type {string}
   * @memberof ApiRateComment
   */
  'description'?: string;
}
/**
 * Lists of rate comments and the rates that apply to them.
 * @export
 * @interface ApiRateCommentBlock
 */
export interface ApiRateCommentBlock {
  /**
   * Rate comments that apply to the rates.
   * @type {Array<ApiRateComment>}
   * @memberof ApiRateCommentBlock
   */
  'comments'?: Array<ApiRateComment>;
  /**
   * Rates for which the rate comments applies.
   * @type {Array<number>}
   * @memberof ApiRateCommentBlock
   */
  'rateCodes'?: Array<number>;
}
/**
 * Response of RateCommentDetails operation.
 * @export
 * @interface ApiRateCommentDetailsRS
 */
export interface ApiRateCommentDetailsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiRateCommentDetailsRS
   */
  'auditData'?: ApiAuditData;
  /**
   * Code of the comment of the hotel.
   * @type {string}
   * @memberof ApiRateCommentDetailsRS
   */
  'code'?: string;
  /**
   * Date of the application of the rate.
   * @type {string}
   * @memberof ApiRateCommentDetailsRS
   */
  'date'?: string;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiRateCommentDetailsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned rate comment details.
   * @type {number}
   * @memberof ApiRateCommentDetailsRS
   */
  'from'?: number;
  /**
   * Code of the hotel.
   * @type {number}
   * @memberof ApiRateCommentDetailsRS
   */
  'hotel'?: number;
  /**
   * Code of the incoming office of the hotel.
   * @type {number}
   * @memberof ApiRateCommentDetailsRS
   */
  'incoming'?: number;
  /**
   * List of rate comment details.
   * @type {Array<ApiRateComment>}
   * @memberof ApiRateCommentDetailsRS
   */
  'rateComments'?: Array<ApiRateComment>;
  /**
   * Highest value of the range of returned rate comment details.
   * @type {number}
   * @memberof ApiRateCommentDetailsRS
   */
  'to'?: number;
  /**
   * Total number of rate comment details matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiRateCommentDetailsRS
   */
  'total'?: number;
}
/**
 * Describes info that the hotelier wants the final passenger to read before confirming the booking.
 * @export
 * @interface ApiRateComments
 */
export interface ApiRateComments {
  /**
   * Code of the rate comment.
   * @type {string}
   * @memberof ApiRateComments
   */
  'code'?: string;
  /**
   * List of rateComments.
   * @type {Array<ApiRateCommentBlock>}
   * @memberof ApiRateComments
   */
  'commentsByRates'?: Array<ApiRateCommentBlock>;
  /**
   * Code of the hotel.
   * @type {number}
   * @memberof ApiRateComments
   */
  'hotel'?: number;
  /**
   * Code of the incoming office of the hotel.
   * @type {number}
   * @memberof ApiRateComments
   */
  'incoming'?: number;
}
/**
 * Response of RateComments operation.
 * @export
 * @interface ApiRateCommentsRS
 */
export interface ApiRateCommentsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiRateCommentsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiRateCommentsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned rate comments.
   * @type {number}
   * @memberof ApiRateCommentsRS
   */
  'from'?: number;
  /**
   * List of rate comments.
   * @type {Array<ApiRateComments>}
   * @memberof ApiRateCommentsRS
   */
  'rateComments'?: Array<ApiRateComments>;
  /**
   * Highest value of the range of returned rate comments.
   * @type {number}
   * @memberof ApiRateCommentsRS
   */
  'to'?: number;
  /**
   * Total number of rate comments matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiRateCommentsRS
   */
  'total'?: number;
}
/**
 * Information describing a room.
 * @export
 * @interface ApiRoom
 */
export interface ApiRoom {
  /**
   * Code of the room characteristic.
   * @type {string}
   * @memberof ApiRoom
   */
  'characteristic'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiRoom
   */
  'characteristicDescription'?: ApiContent;
  /**
   * Code of the room.
   * @type {string}
   * @memberof ApiRoom
   */
  'code'?: string;
  /**
   * Description of the room.
   * @type {string}
   * @memberof ApiRoom
   */
  'description'?: string;
  /**
   * Maximum number of adults allowed in the room.
   * @type {number}
   * @memberof ApiRoom
   */
  'maxAdults'?: number;
  /**
   * Maximum number of children allowed in the room.
   * @type {number}
   * @memberof ApiRoom
   */
  'maxChildren'?: number;
  /**
   * Maximum number of paxes allowed in the room.
   * @type {number}
   * @memberof ApiRoom
   */
  'maxPax'?: number;
  /**
   * Minimum number of adults allowed in the room.
   * @type {number}
   * @memberof ApiRoom
   */
  'minAdults'?: number;
  /**
   * Minimum number of adults allowed in the room.
   * @type {number}
   * @memberof ApiRoom
   */
  'minPax'?: number;
  /**
   * Code of the room type. Returned only for Unified clients.
   * @type {string}
   * @memberof ApiRoom
   */
  'type'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiRoom
   */
  'typeDescription'?: ApiContent;
}
/**
 * Response of Rooms operation.
 * @export
 * @interface ApiRoomsRS
 */
export interface ApiRoomsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiRoomsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiRoomsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned rooms.
   * @type {number}
   * @memberof ApiRoomsRS
   */
  'from'?: number;
  /**
   * List of rooms.
   * @type {Array<ApiRoom>}
   * @memberof ApiRoomsRS
   */
  'rooms'?: Array<ApiRoom>;
  /**
   * Highest value of the range of returned rooms.
   * @type {number}
   * @memberof ApiRoomsRS
   */
  'to'?: number;
  /**
   * Total number of rooms matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiRoomsRS
   */
  'total'?: number;
}
/**
 \*
 * @export
 * @interface ApiSegment
 */
export interface ApiSegment {
  /**
   \*
   * @type {number}
   * @memberof ApiSegment
   */
  'code'?: number;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiSegment
   */
  'description'?: ApiContent;
}
/**
 * Response of Segments operation.
 * @export
 * @interface ApiSegmentsRS
 */
export interface ApiSegmentsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiSegmentsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiSegmentsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned segments.
   * @type {number}
   * @memberof ApiSegmentsRS
   */
  'from'?: number;
  /**
   * List of segments.
   * @type {Array<ApiSegment>}
   * @memberof ApiSegmentsRS
   */
  'segments'?: Array<ApiSegment>;
  /**
   * Highest value of the range of returned segments.
   * @type {number}
   * @memberof ApiSegmentsRS
   */
  'to'?: number;
  /**
   * Total number of segments matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiSegmentsRS
   */
  'total'?: number;
}
/**
 * State information.
 * @export
 * @interface ApiState
 */
export interface ApiState {
  /**
   * Internal code of the state.
   * @type {string}
   * @memberof ApiState
   */
  'code'?: string;
  /**
   * Name of the state.
   * @type {string}
   * @memberof ApiState
   */
  'name'?: string;
}
/**
 * Info of a terminal.
 * @export
 * @interface ApiTerminal
 */
export interface ApiTerminal {
  /**
   * Code of the terminal.
   * @type {string}
   * @memberof ApiTerminal
   */
  'code'?: string;
  /**
   * Code of the country where the terminal is located.
   * @type {string}
   * @memberof ApiTerminal
   */
  'country'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiTerminal
   */
  'description'?: ApiContent;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiTerminal
   */
  'name'?: ApiContent;
  /**
   * Code of the type of the terminal.
   * @type {string}
   * @memberof ApiTerminal
   */
  'type'?: string;
}
/**
 * Response of Terminals operation.
 * @export
 * @interface ApiTerminalsRS
 */
export interface ApiTerminalsRS {
  /**
   \*
   * @type {ApiAuditData}
   * @memberof ApiTerminalsRS
   */
  'auditData'?: ApiAuditData;
  /**
   \*
   * @type {ApiHotelbedsError}
   * @memberof ApiTerminalsRS
   */
  'error'?: ApiHotelbedsError;
  /**
   * Lowest value of the range of returned terminals.
   * @type {number}
   * @memberof ApiTerminalsRS
   */
  'from'?: number;
  /**
   * List of terminals.
   * @type {Array<ApiTerminal>}
   * @memberof ApiTerminalsRS
   */
  'terminals'?: Array<ApiTerminal>;
  /**
   * Highest value of the range of returned terminals.
   * @type {number}
   * @memberof ApiTerminalsRS
   */
  'to'?: number;
  /**
   * Total number of terminals matching the parameters used in the request (regardless of pagination/returned range).
   * @type {number}
   * @memberof ApiTerminalsRS
   */
  'total'?: number;
}
/**
 * Information on a wildcard room.
 * @export
 * @interface ApiWildCard
 */
export interface ApiWildCard {
  /**
   * Code of the wildcard room characteristic.
   * @type {string}
   * @memberof ApiWildCard
   */
  'characteristicCode'?: string;
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiWildCard
   */
  'hotelRoomDescription'?: ApiContent;
  /**
   * Code of the wildcard room type.
   * @type {string}
   * @memberof ApiWildCard
   */
  'roomCode'?: string;
  /**
   * Code of the wildcard room.
   * @type {string}
   * @memberof ApiWildCard
   */
  'roomType'?: string;
}
/**
 * Information on the zone inside the destination where to search for hotels.
 * @export
 * @interface ApiZone
 */
export interface ApiZone {
  /**
   \*
   * @type {ApiContent}
   * @memberof ApiZone
   */
  'description'?: ApiContent;
  /**
   * Internal zone name. (only available for Hotel Detail)
   * @type {string}
   * @memberof ApiZone
   */
  'name'?: string;
  /**
   * Internal Zone Code.
   * @type {number}
   * @memberof ApiZone
   */
  'zoneCode'?: number;
}
/**
 * Query parameters for hotels operation.
 * @export
 * @interface HotelsQR
 */
export interface HotelsQR {
  /**
   * Filter to limit the results for an specific destination.
   * @type {string}
   * @memberof HotelsQR
   */
  destinationCode?: string

  /**
   * Filter to limit the results for an specific country.
   * @type {string}
   * @memberof HotelsQR
   */
  countryCode?: string

  /**
   * Filter for a specific hotel or list of hotels.
   * @type {Array<number>}
   * @memberof HotelsQR
   */
  codes?: Array<number>

  /**
   * Filter to display all hotel portfolio (hotels sellable through API, hotels sellable through our websites and hotels without rates on sale). If this filter IS NOT included in request, ONLY the active hotels sellable through our API will be shown (recommended option)
   * @type {boolean}
   * @memberof HotelsQR
   */
  showFullPortfolio?: boolean

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof HotelsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof HotelsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof HotelsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof HotelsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof HotelsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof HotelsQR
   */
  lastUpdateTime?: string

  /**
   * Sending this parameter as true in the /hotels operations will only return the hotels which possess at least one PMSRoomCode (useful when mapping against the original property codes).
   * @type {boolean}
   * @memberof HotelsQR
   */
  pMSRoomCode?: boolean
}
/**
 * Query parameters for hotelDetails operation.
 * @export
 * @interface HotelDetailsQR
 */
export interface HotelDetailsQR {
  /**
   * Code or codes of specific hotels from which to get details.
   * @type {string}
   * @memberof HotelDetailsQR
   */
  hotelCodes: string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof HotelDetailsQR
   */
  language?: string

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof HotelDetailsQR
   */
  useSecondaryLanguage?: boolean
}
/**
 * Request parameters for countries operation.
 * @export
 * @interface CountriesQR
 */
export interface CountriesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof CountriesQR
   */
  fields?: Array<string>|string

  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof CountriesQR
   */
  codes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof CountriesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof CountriesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof CountriesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof CountriesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof CountriesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for destinations operation.
 * @export
 * @interface DestinationsQR
 */
export interface DestinationsQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof DestinationsQR
   */
  fields?: Array<string>|string

  /**
   * Filter to limit the results for an specific destination or list of destinations.
   * @type {Array<string>|string}
   * @memberof DestinationsQR
   */
  codes?: Array<string>|string

  /**
   * Filter for a specific country of list of countries.
   * @type {Array<string>|string}
   * @memberof DestinationsQR
   */
  countryCodes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof DestinationsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof DestinationsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof DestinationsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof DestinationsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof DestinationsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for accommodations operation.
 * @export
 * @interface AccommodationsQR
 */
export interface AccommodationsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof AccommodationsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof AccommodationsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof AccommodationsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof AccommodationsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof AccommodationsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof AccommodationsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof AccommodationsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for amenities operation.
 * @export
 * @interface AmenitiesQR
 */
export interface AmenitiesQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof AmenitiesQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof AmenitiesQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof AmenitiesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof AmenitiesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof AmenitiesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof AmenitiesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof AmenitiesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for boardGroups operation.
 * @export
 * @interface BoardGroupsQR
 */
export interface BoardGroupsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof BoardGroupsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof BoardGroupsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof BoardGroupsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof BoardGroupsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof BoardGroupsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof BoardGroupsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof BoardGroupsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for boards operation.
 * @export
 * @interface BoardsQR
 */
export interface BoardsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof BoardsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof BoardsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof BoardsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof BoardsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof BoardsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof BoardsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof BoardsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for categories operation.
 * @export
 * @interface CategoriesQR
 */
export interface CategoriesQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof CategoriesQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof CategoriesQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof CategoriesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof CategoriesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof CategoriesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof CategoriesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof CategoriesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for chains operation.
 * @export
 * @interface ChainsQR
 */
export interface ChainsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof ChainsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof ChainsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof ChainsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof ChainsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof ChainsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof ChainsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof ChainsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for classifications operation.
 * @export
 * @interface ClassificationsQR
 */
export interface ClassificationsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof ClassificationsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof ClassificationsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof ClassificationsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof ClassificationsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof ClassificationsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof ClassificationsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof ClassificationsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for currencies operation.
 * @export
 * @interface CurrenciesQR
 */
export interface CurrenciesQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof CurrenciesQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof CurrenciesQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof CurrenciesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof CurrenciesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof CurrenciesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof CurrenciesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof CurrenciesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for facilities operation.
 * @export
 * @interface FacilitiesQR
 */
export interface FacilitiesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof FacilitiesQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof FacilitiesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof FacilitiesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof FacilitiesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof FacilitiesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof FacilitiesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for facilitygroups operation.
 * @export
 * @interface FacilityGroupsQR
 */
export interface FacilityGroupsQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof FacilityGroupsQR
   */
  fields?: Array<string>|string

  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof FacilityGroupsQR
   */
  codes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof FacilityGroupsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof FacilityGroupsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof FacilityGroupsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof FacilityGroupsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof FacilityGroupsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for facilitytypologies operation.
 * @export
 * @interface FacilityTypologiesQR
 */
export interface FacilityTypologiesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof FacilityTypologiesQR
   */
  fields?: Array<string>|string

  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof FacilityTypologiesQR
   */
  codes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof FacilityTypologiesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof FacilityTypologiesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof FacilityTypologiesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof FacilityTypologiesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof FacilityTypologiesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for groupcategories operation.
 * @export
 * @interface GroupCategoriesQR
 */
export interface GroupCategoriesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof GroupCategoriesQR
   */
  fields?: Array<string>|string

  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof GroupCategoriesQR
   */
  codes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof GroupCategoriesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof GroupCategoriesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof GroupCategoriesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof GroupCategoriesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof GroupCategoriesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for imagetypes operation.
 * @export
 * @interface ImageTypesQR
 */
export interface ImageTypesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof ImageTypesQR
   */
  fields?: Array<string>|string

  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof ImageTypesQR
   */
  codes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof ImageTypesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof ImageTypesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof ImageTypesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof ImageTypesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof ImageTypesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for issues operation.
 * @export
 * @interface IssuesQR
 */
export interface IssuesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof IssuesQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof IssuesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof IssuesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof IssuesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof IssuesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof IssuesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for languages operation.
 * @export
 * @interface LanguagesQR
 */
export interface LanguagesQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof LanguagesQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof LanguagesQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof LanguagesQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof LanguagesQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof LanguagesQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof LanguagesQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for promotions operation.
 * @export
 * @interface PromotionsQR
 */
export interface PromotionsQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof PromotionsQR
   */
  fields?: Array<string>|string

  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof PromotionsQR
   */
  codes?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof PromotionsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof PromotionsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof PromotionsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof PromotionsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof PromotionsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for rateComments operation.
 * @export
 * @interface RateCommentsQR
 */
export interface RateCommentsQR {
  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof RateCommentsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof RateCommentsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof RateCommentsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof RateCommentsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof RateCommentsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof RateCommentsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for ratecommentdetail operation.
 * @export
 * @interface RateCommentDetailsQR
 */
export interface RateCommentDetailsQR {
  /**
   * Comment date
   * @type {string}
   * @memberof RateCommentDetailsQR
   */
  date: string

  /**
   * Code (symbol pipe should be escaped with %7C HTML encoding)
   * @type {string}
   * @memberof RateCommentDetailsQR
   */
  code: string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof RateCommentDetailsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof RateCommentDetailsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof RateCommentDetailsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof RateCommentDetailsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof RateCommentDetailsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof RateCommentDetailsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for rooms operation.
 * @export
 * @interface RoomsQR
 */
export interface RoomsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof RoomsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof RoomsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof RoomsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof RoomsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof RoomsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof RoomsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof RoomsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for segments operation.
 * @export
 * @interface SegmentsQR
 */
export interface SegmentsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof SegmentsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof SegmentsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof SegmentsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof SegmentsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof SegmentsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof SegmentsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof SegmentsQR
   */
  lastUpdateTime?: string
}
/**
 * Request parameters for terminals operation.
 * @export
 * @interface TerminalsQR
 */
export interface TerminalsQR {
  /**
   * List of codes to filter by.
   * @type {Array<string>|string}
   * @memberof TerminalsQR
   */
  codes?: Array<string>|string

  /**
   * The list of fields to be received in the response. To retrieve all the fields use ‘all’. If nothing is specified, all fields are returned. See the complete list of available fields in the response.
   * @type {Array<string>|string}
   * @memberof TerminalsQR
   */
  fields?: Array<string>|string

  /**
   * The language code for the language in which you want the descriptions to be returned. If language is not specified, English will be used as default language.
   * @type {string}
   * @memberof TerminalsQR
   */
  language?: string

  /**
   * The number of the initial record to receive. If nothing is specified, 1 is the default value.
   * @type {number}
   * @memberof TerminalsQR
   */
  from?: number

  /**
   * The number of the final record to receive. If nothing is indicated, 100 is the default value.
   * @type {number}
   * @memberof TerminalsQR
   */
  to?: number

  /**
   * Defines if you want to receive the descriptions in English if the description is not available in the language requested.
   * @type {boolean}
   * @memberof TerminalsQR
   */
  useSecondaryLanguage?: boolean

  /**
   * Specifying this parameter limits the results to those modified or added after the date specified. The required format is YYYY-MM-DD.
   * @type {string}
   * @memberof TerminalsQR
   */
  lastUpdateTime?: string
}
