/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorUserTemplateRequestAttributes } from "./MonitorUserTemplateRequestAttributes";
import { MonitorUserTemplateResourceType } from "./MonitorUserTemplateResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Monitor user template data.
 */
export class MonitorUserTemplateCreateData {
  /**
   * Attributes for a monitor user template.
   */
  "attributes": MonitorUserTemplateRequestAttributes;
  /**
   * Monitor user template resource type.
   */
  "type": MonitorUserTemplateResourceType;

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
      type: "MonitorUserTemplateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MonitorUserTemplateResourceType",
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
    return MonitorUserTemplateCreateData.attributeTypeMap;
  }

  public constructor() {}
}
