/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentStatusPageNoticeCreateDataAttributes } from "./IncidentStatusPageNoticeCreateDataAttributes";
import { IncidentStatusPageNoticeIntegrationType } from "./IncidentStatusPageNoticeIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for publishing a status page notice.
 */
export class IncidentStatusPageNoticeCreateData {
  /**
   * Attributes for publishing a status page notice.
   */
  "attributes": IncidentStatusPageNoticeCreateDataAttributes;
  /**
   * Incident integration resource type.
   */
  "type": IncidentStatusPageNoticeIntegrationType;

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
      type: "IncidentStatusPageNoticeCreateDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentStatusPageNoticeIntegrationType",
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
    return IncidentStatusPageNoticeCreateData.attributeTypeMap;
  }

  public constructor() {}
}
