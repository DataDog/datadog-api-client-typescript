import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The lists of field names returned by `GET /api/v1/usage/summary` at each
 * of its three response levels. Each list contains every key the data endpoint
 * emits—both typed fields declared in the OpenAPI spec and untyped keys
 * exposed through `additionalProperties`.
 */
export class UsageSummaryAvailableFieldsAttributes {
  /**
   * Sorted list of every key returned inside each `UsageSummaryDate`
   * entry of `usage[]` (typed fields and `additionalProperties` keys
   * combined).
   */
  "dateFields"?: Array<string>;
  /**
   * Sorted list of every key returned inside each `UsageSummaryDateOrg`
   * entry of `usage[].orgs[]` (typed fields and `additionalProperties`
   * keys combined).
   */
  "dateOrgFields"?: Array<string>;
  /**
   * Sorted list of every key returned as a direct property of
   * `UsageSummaryResponse` (typed fields and `additionalProperties`
   * keys combined).
   */
  "responseFields"?: Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dateFields: {
      baseName: "date_fields",
      type: "Array<string>",
    },
    dateOrgFields: {
      baseName: "date_org_fields",
      type: "Array<string>",
    },
    responseFields: {
      baseName: "response_fields",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSummaryAvailableFieldsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
