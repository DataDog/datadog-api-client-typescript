import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayDataCaptureMode } from "./AiGatewayDataCaptureMode";
import { AiGatewayMetadataCaptureItem } from "./AiGatewayMetadataCaptureItem";
import { AiGatewayZDRMode } from "./AiGatewayZDRMode";

/**
 * Organization-wide AI Gateway governance controls to replace.
 */
export class AiGatewayGovernanceReplaceAttributes {
  /**
   * Controls whether AI Gateway captures request and response content in addition to metadata.
   */
  "dataCaptureMode": AiGatewayDataCaptureMode;
  /**
   * Items Metadata-only capture adds, each listed once. An item requires the items whose information it already reveals: `tool_output_size`, `tool_names` and `conversation_shape` require `tool_usage`, and `input_size_by_role` requires `tool_output_size`. A set that leaves out a required item is rejected. When several Metadata-only overrides match a request, it gets only the items all of them select.
   */
  "metadataCapture"?: Array<AiGatewayMetadataCaptureItem>;
  /**
   * Zero data retention requirement for the organization's requests.
   */
  "zdrMode"?: AiGatewayZDRMode;
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
    dataCaptureMode: {
      baseName: "data_capture_mode",
      type: "AiGatewayDataCaptureMode",
      required: true,
    },
    metadataCapture: {
      baseName: "metadata_capture",
      type: "Array<AiGatewayMetadataCaptureItem>",
    },
    zdrMode: {
      baseName: "zdr_mode",
      type: "AiGatewayZDRMode",
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
    return AiGatewayGovernanceReplaceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
