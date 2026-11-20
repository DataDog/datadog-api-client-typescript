/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackBackendDefinitionType } from "./PowerpackBackendDefinitionType";
import { PowerpackBackendTemplateVariables } from "./PowerpackBackendTemplateVariables";
import { PowerpackState } from "./PowerpackState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PowerpackBackendDefinition {
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
  "powerpackId": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showTitle"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "state"?: PowerpackState;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "templateVariables"?: PowerpackBackendTemplateVariables;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": PowerpackBackendDefinitionType;

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
    powerpackId: {
      baseName: "powerpack_id",
      type: "string",
      required: true,
    },
    showTitle: {
      baseName: "show_title",
      type: "boolean",
    },
    state: {
      baseName: "state",
      type: "PowerpackState",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "PowerpackBackendTemplateVariables",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PowerpackBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
