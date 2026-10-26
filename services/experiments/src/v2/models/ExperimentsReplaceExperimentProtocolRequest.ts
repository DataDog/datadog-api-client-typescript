import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsReplaceExperimentProtocolRequestData } from "./ExperimentsReplaceExperimentProtocolRequestData";

/**
 * Replace a published protocol template. Omitted optional template fields are cleared. Omitted enforcement and migration_metadata are preserved. Enabled limits require their values; allocation settings require environment_id.
 */
export class ExperimentsReplaceExperimentProtocolRequest {
  /**
   * JSON:API protocol request resource.
   */
  "data": ExperimentsReplaceExperimentProtocolRequestData;
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
      type: "ExperimentsReplaceExperimentProtocolRequestData",
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
    return ExperimentsReplaceExperimentProtocolRequest.attributeTypeMap;
  }

  public constructor() {}
}
