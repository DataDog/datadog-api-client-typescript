/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertEventCustomAttributesLinksItems } from "./AlertEventCustomAttributesLinksItems";
import { AlertEventCustomAttributesPriority } from "./AlertEventCustomAttributesPriority";
import { AlertEventCustomAttributesStatus } from "./AlertEventCustomAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Alert event attributes.
 */
export class AlertEventCustomAttributes {
  /**
   * Free form JSON object for arbitrary data. Supports up to 100 properties per object and a maximum nesting depth of 10 levels.
   */
  "custom"?: { [key: string]: any };
  /**
   * The links related to the event. Maximum of 20 links allowed.
   */
  "links"?: Array<AlertEventCustomAttributesLinksItems>;
  /**
   * The priority of the alert.
   */
  "priority"?: AlertEventCustomAttributesPriority;
  /**
   * The status of the alert.
   */
  "status": AlertEventCustomAttributesStatus;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    custom: {
      baseName: "custom",
      type: "{ [key: string]: any; }",
    },
    links: {
      baseName: "links",
      type: "Array<AlertEventCustomAttributesLinksItems>",
    },
    priority: {
      baseName: "priority",
      type: "AlertEventCustomAttributesPriority",
    },
    status: {
      baseName: "status",
      type: "AlertEventCustomAttributesStatus",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AlertEventCustomAttributes.attributeTypeMap;
  }

  public constructor() {}
}
