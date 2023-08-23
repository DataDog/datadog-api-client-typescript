/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceCreateAttributes } from "./OpsgenieServiceCreateAttributes";
import { OpsgenieServiceType } from "./OpsgenieServiceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Opsgenie service data for a create request.
 */
export class OpsgenieServiceCreateData {
  /**
   * The Opsgenie service attributes for a create request.
   */
  "attributes": OpsgenieServiceCreateAttributes;
  /**
   * Opsgenie service resource type.
   */
  "type": OpsgenieServiceType;

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
      type: "OpsgenieServiceCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OpsgenieServiceType",
      required: true,
    },
  };
}
