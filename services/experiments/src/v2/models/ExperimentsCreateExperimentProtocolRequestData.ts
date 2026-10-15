import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentProtocolRequestDataAttributes } from "./ExperimentsCreateExperimentProtocolRequestDataAttributes";
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";

/**
 * JSON:API protocol request resource.
 */
export class ExperimentsCreateExperimentProtocolRequestData {
  /**
   * Create a draft protocol with the organization default subject type.
   */
  "attributes": ExperimentsCreateExperimentProtocolRequestDataAttributes;
  /**
   * Protocols resource type.
   */
  "type": ExperimentsPublicProtocolResponseDataType;
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
      type: "ExperimentsCreateExperimentProtocolRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExperimentsPublicProtocolResponseDataType",
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
    return ExperimentsCreateExperimentProtocolRequestData.attributeTypeMap;
  }

  public constructor() {}
}
