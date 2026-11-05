import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureOverrideMode } from "./AiGatewayCaptureOverrideMode";
import { AiGatewayCaptureResponseScope } from "./AiGatewayCaptureResponseScope";
import { AiGatewayMetadataCaptureItem } from "./AiGatewayMetadataCaptureItem";

/**
 * Saved data capture override with its request filters, capture mode, revision, and timestamps.
 */
export class AiGatewayCaptureOverride {
  /**
   * Timestamp when the override was created.
   */
  "createdAt": Date;
  /**
   * UUID identifying the override within the organization.
   */
  "id": string;
  /**
   * Items Metadata-only capture adds, each listed once. An item requires the items whose information it already reveals: `tool_output_size`, `tool_names` and `conversation_shape` require `tool_usage`, and `input_size_by_role` requires `tool_output_size`. A set that leaves out a required item is rejected. When several Metadata-only overrides match a request, it gets only the items all of them select.
   */
  "metadataCapture"?: Array<AiGatewayMetadataCaptureItem>;
  /**
   * Capture mode for matching traffic.
   */
  "mode": AiGatewayCaptureOverrideMode;
  /**
   * Display name of the override. Names need not be unique; identify overrides by `id`.
   */
  "name": string;
  /**
   * Current override revision, required for replacement or deletion.
   */
  "revision": number;
  /**
   * Visible request filters. Provider and model tags are withheld when the caller cannot view them. An empty object or empty tags can represent a fully restricted scope; scope_restricted identifies redaction.
   */
  "scope": AiGatewayCaptureResponseScope;
  /**
   * Whether provider or model scope metadata was withheld. Omit unchanged scope fields on an unrelated update to preserve their saved values.
   */
  "scopeRestricted": boolean;
  /**
   * Timestamp when the override was last modified.
   */
  "updatedAt": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    metadataCapture: {
      baseName: "metadata_capture",
      type: "Array<AiGatewayMetadataCaptureItem>",
    },
    mode: {
      baseName: "mode",
      type: "AiGatewayCaptureOverrideMode",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    revision: {
      baseName: "revision",
      type: "number",
      required: true,
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "AiGatewayCaptureResponseScope",
      required: true,
    },
    scopeRestricted: {
      baseName: "scope_restricted",
      type: "boolean",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayCaptureOverride.attributeTypeMap;
  }

  public constructor() {}
}
