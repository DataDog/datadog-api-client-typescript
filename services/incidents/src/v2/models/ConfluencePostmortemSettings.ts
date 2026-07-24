import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for a postmortem template stored in Confluence. Required when `location` is `confluence`.
 */
export class ConfluencePostmortemSettings {
  /**
   * The ID of the Confluence integration account.
   */
  "accountId": string;
  /**
   * The ID of the parent Confluence page under which postmortems are created.
   */
  "parentId"?: string;
  /**
   * The ID of the Confluence space where postmortems are created.
   */
  "spaceId": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    parentId: {
      baseName: "parent_id",
      type: "string",
    },
    spaceId: {
      baseName: "space_id",
      type: "string",
      required: true,
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
    return ConfluencePostmortemSettings.attributeTypeMap;
  }

  public constructor() {}
}
