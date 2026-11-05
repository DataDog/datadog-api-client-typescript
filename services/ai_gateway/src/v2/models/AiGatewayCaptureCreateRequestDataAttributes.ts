import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureCreateRequestDataAttributesMode } from "./AiGatewayCaptureCreateRequestDataAttributesMode";
import { AiGatewayCaptureCreateRequestDataAttributesOperation } from "./AiGatewayCaptureCreateRequestDataAttributesOperation";
import { AiGatewayCaptureScope } from "./AiGatewayCaptureScope";
import { AiGatewayMetadataCaptureItem } from "./AiGatewayMetadataCaptureItem";

/**
 * Settings and configuration revision for creating the override.
 */
export class AiGatewayCaptureCreateRequestDataAttributes {
  /**
   * Opaque revision of the organization default and all overrides. Writes require the revision returned by a current read or preview.
   */
  "configurationRevision": string;
  /**
   * Set to `true` to confirm a change that can enable full capture, including a deletion that causes a `full_capture` override or the organization default to apply.
   */
  "confirmFullCapture"?: boolean;
  /**
   * Items Metadata-only capture adds, each listed once. An item requires the items whose information it already reveals: `tool_output_size`, `tool_names` and `conversation_shape` require `tool_usage`, and `input_size_by_role` requires `tool_output_size`. A set that leaves out a required item is rejected. When several Metadata-only overrides match a request, it gets only the items all of them select.
   */
  "metadataCapture"?: Array<AiGatewayMetadataCaptureItem>;
  /**
   * Capture mode for matching traffic.
   */
  "mode": AiGatewayCaptureCreateRequestDataAttributesMode;
  /**
   * Display name of the override. Names need not be unique; identify overrides by `id`.
   */
  "name": string;
  /**
   * Proposed operation for preview. Write endpoints infer it from the HTTP method.
   */
  "operation"?: AiGatewayCaptureCreateRequestDataAttributesOperation;
  /**
   * Current override revision, required for replacement or deletion.
   */
  "revision"?: number;
  /**
   * All selected filters combine with AND, with one value per filter. The `model` and `provider` tags apply to each actual direct or routed attempt, including fallback destinations. Routes are not selectable filters. At least one filter is required.
   * If any matching override uses `metadata_only`, that mode applies. Otherwise, if any matching override uses `full_capture`, that mode applies. The organization default applies only when no override matches. Overrides have no priority or specificity ordering.
   */
  "scope": AiGatewayCaptureScope;
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
    configurationRevision: {
      baseName: "configuration_revision",
      type: "string",
      required: true,
    },
    confirmFullCapture: {
      baseName: "confirm_full_capture",
      type: "boolean",
    },
    metadataCapture: {
      baseName: "metadata_capture",
      type: "Array<AiGatewayMetadataCaptureItem>",
    },
    mode: {
      baseName: "mode",
      type: "AiGatewayCaptureCreateRequestDataAttributesMode",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    operation: {
      baseName: "operation",
      type: "AiGatewayCaptureCreateRequestDataAttributesOperation",
    },
    revision: {
      baseName: "revision",
      type: "number",
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "AiGatewayCaptureScope",
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
    return AiGatewayCaptureCreateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
