/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single member within a layer during an update request, referring
 * to a specific user.
 */
export class ScheduleUpdateRequestDataAttributesLayersItemsMembersItems {
  /**
   * Identifies the user who is assigned to this member object. Only `id` is required.
   */
  "user"?: ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser;

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
    user: {
      baseName: "user",
      type: "ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScheduleUpdateRequestDataAttributesLayersItemsMembersItems.attributeTypeMap;
  }

  public constructor() {}
}
