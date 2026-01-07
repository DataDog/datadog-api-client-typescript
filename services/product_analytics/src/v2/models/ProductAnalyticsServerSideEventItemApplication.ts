import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The application in which you want to send your events.
 */
export class ProductAnalyticsServerSideEventItemApplication {
  /**
   * The application ID of your application. It can be found in your
   * [application management page](https://app.datadoghq.com/rum/list).
   */
  "id": string;
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
    id: {
      baseName: "id",
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
    return ProductAnalyticsServerSideEventItemApplication.attributeTypeMap;
  }

  public constructor() {}
}
