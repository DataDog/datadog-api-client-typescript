import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentProtocolRequestData } from "./ExperimentsCreateExperimentProtocolRequestData";

/**
 * Create a draft protocol with the organization default subject type.
 */
export class ExperimentsCreateExperimentProtocolRequest {
  /**
   * JSON:API protocol request resource.
   */
  "data": ExperimentsCreateExperimentProtocolRequestData;
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
    data: {
      baseName: "data",
      type: "ExperimentsCreateExperimentProtocolRequestData",
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
    return ExperimentsCreateExperimentProtocolRequest.attributeTypeMap;
  }

  public constructor() {}
}
