import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentProtocolRequestData } from "./ExperimentsPatchExperimentProtocolRequestData";

/**
 * Partial protocol update. Omitted attributes remain unchanged. Published protocols accept only name, description, and migration_metadata; archived protocols reject updates.
 */
export class ExperimentsPatchExperimentProtocolRequest {
  /**
   * JSON:API protocol request resource.
   */
  "data": ExperimentsPatchExperimentProtocolRequestData;
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
      type: "ExperimentsPatchExperimentProtocolRequestData",
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
    return ExperimentsPatchExperimentProtocolRequest.attributeTypeMap;
  }

  public constructor() {}
}
