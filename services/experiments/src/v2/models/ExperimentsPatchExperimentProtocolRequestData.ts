import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentProtocolRequestDataAttributes } from "./ExperimentsPatchExperimentProtocolRequestDataAttributes";
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";

/**
 * JSON:API protocol request resource.
 */
export class ExperimentsPatchExperimentProtocolRequestData {
  /**
   * Partial protocol update. Omitted attributes remain unchanged. Published protocols accept only name, description, and migration_metadata; archived protocols reject updates.
   */
  "attributes"?: ExperimentsPatchExperimentProtocolRequestDataAttributes;
  /**
   * Protocol ID. If supplied, must match the path protocol_id.
   */
  "id"?: string;
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
      type: "ExperimentsPatchExperimentProtocolRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
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
    return ExperimentsPatchExperimentProtocolRequestData.attributeTypeMap;
  }

  public constructor() {}
}
