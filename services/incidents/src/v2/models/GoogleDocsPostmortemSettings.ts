import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for a postmortem template stored in Google Docs. Required when `location` is `google_docs`.
 */
export class GoogleDocsPostmortemSettings {
  /**
   * The ID of the Google Drive integration account.
   */
  "accountId": string;
  /**
   * The ID of the Google Drive folder where postmortems are created.
   */
  "parentFolderId": string;
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
    parentFolderId: {
      baseName: "parent_folder_id",
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
    return GoogleDocsPostmortemSettings.attributeTypeMap;
  }

  public constructor() {}
}
