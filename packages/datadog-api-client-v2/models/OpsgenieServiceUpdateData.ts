/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceType } from "./OpsgenieServiceType";
import { OpsgenieServiceUpdateAttributes } from "./OpsgenieServiceUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Opsgenie service for an update request.
 */
export class OpsgenieServiceUpdateData {
  /**
   * The Opsgenie service attributes for an update request.
   */
  "attributes": OpsgenieServiceUpdateAttributes;
  /**
   * The ID of the Opsgenie service.
   */
  "id": string;
  /**
   * Opsgenie service resource type.
   */
  "type": OpsgenieServiceType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "OpsgenieServiceUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OpsgenieServiceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpsgenieServiceUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
