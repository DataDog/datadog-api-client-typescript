import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardBackendWidget } from "./DashboardBackendWidget";
import { GroupBackendDefinitionDefaultState } from "./GroupBackendDefinitionDefaultState";
import { GroupBackendDefinitionType } from "./GroupBackendDefinitionType";
import { LayoutType } from "./LayoutType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GroupBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "backgroundColor"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "bannerImg"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "defaultState"?: GroupBackendDefinitionDefaultState;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "layoutType": LayoutType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showTitle"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": GroupBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "widgets": Array<DashboardBackendWidget>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    backgroundColor: {
      baseName: "background_color",
      type: "string",
    },
    bannerImg: {
      baseName: "banner_img",
      type: "string",
    },
    defaultState: {
      baseName: "default_state",
      type: "GroupBackendDefinitionDefaultState",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    layoutType: {
      baseName: "layout_type",
      type: "LayoutType",
      required: true,
    },
    showTitle: {
      baseName: "show_title",
      type: "boolean",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GroupBackendDefinitionType",
      required: true,
    },
    widgets: {
      baseName: "widgets",
      type: "Array<DashboardBackendWidget>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GroupBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
