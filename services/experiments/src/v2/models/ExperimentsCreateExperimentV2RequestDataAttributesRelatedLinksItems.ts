import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * External link associated with an experiment.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems {
  /**
   * Link ID. Omit it when adding a link.
   */
  "id"?: string;
  /**
   * Optional display title.
   */
  "title"?: string;
  /**
   * Absolute URL.
   */
  "url": string;
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
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems.attributeTypeMap;
  }

  public constructor() {}
}
