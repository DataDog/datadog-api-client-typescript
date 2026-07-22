import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateSnapshotAdditionalConfig } from "./CreateSnapshotAdditionalConfig";
import { CreateSnapshotTTL } from "./CreateSnapshotTTL";

/**
 * Attributes for snapshot creation.
 */
export class CreateSnapshotDataAttributesRequest {
  /**
   * Additional configuration options for snapshot creation.
   */
  "additionalConfig"?: CreateSnapshotAdditionalConfig;
  /**
   * End of the time window for the snapshot, in milliseconds since Unix epoch.
   */
  "end": number;
  /**
   * The height of the rendered snapshot in pixels.
   */
  "height"?: number;
  /**
   * Whether the snapshot requires authentication to view. Authenticated snapshots are scoped to the creating organization.
   */
  "isAuthenticated"?: boolean;
  /**
   * Start of the time window for the snapshot, in milliseconds since Unix epoch.
   */
  "start": number;
  /**
   * The time-to-live for the snapshot. This value corresponds to storage lifecycle policies that automatically delete the snapshot after the specified period.
   */
  "ttl"?: CreateSnapshotTTL;
  /**
   * The widget definition to render as a snapshot. Must include a valid `type` field and non-empty `requests` array.
   */
  "widgetDefinition": { [key: string]: any; };
  /**
   * The width of the rendered snapshot in pixels.
   */
  "width"?: number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    additionalConfig: {
      baseName: "additional_config",
      type: "CreateSnapshotAdditionalConfig",
    },
    end: {
      baseName: "end",
      type: "number",
      required: true,
      format: "int64",
    },
    height: {
      baseName: "height",
      type: "number",
      format: "int64",
    },
    isAuthenticated: {
      baseName: "is_authenticated",
      type: "boolean",
    },
    start: {
      baseName: "start",
      type: "number",
      required: true,
      format: "int64",
    },
    ttl: {
      baseName: "ttl",
      type: "CreateSnapshotTTL",
    },
    widgetDefinition: {
      baseName: "widget_definition",
      type: "{ [key: string]: any; }",
      required: true,
    },
    width: {
      baseName: "width",
      type: "number",
      format: "int64",
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
    return CreateSnapshotDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
