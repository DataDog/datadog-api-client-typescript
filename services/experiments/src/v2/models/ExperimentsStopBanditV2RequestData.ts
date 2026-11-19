import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsStopBanditV2RequestDataAttributes } from "./ExperimentsStopBanditV2RequestDataAttributes";
import { ExperimentsStopBanditV2RequestDataType } from "./ExperimentsStopBanditV2RequestDataType";

/**
 * The variant to serve once the bandit stops.
 */
export class ExperimentsStopBanditV2RequestData {
  /**
   * The variant to serve once the bandit stops.
   */
  "attributes": ExperimentsStopBanditV2RequestDataAttributes;
  /**
   * Stop bandit request resource type.
   */
  "type": ExperimentsStopBanditV2RequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "ExperimentsStopBanditV2RequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExperimentsStopBanditV2RequestDataType",
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
    return ExperimentsStopBanditV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
