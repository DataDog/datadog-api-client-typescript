/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesComponentDataAttributesStatus } from "./StatusPagesComponentDataAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class PatchDegradationRequestDataAttributesComponentsAffectedItems {
  /**
   * The ID of the component. Must be a component of type `component`.
   */
  "id": string;
  "name"?: string;
  /**
   * The status of the component.
   */
  "status": StatusPagesComponentDataAttributesStatus;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "StatusPagesComponentDataAttributesStatus",
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
    return PatchDegradationRequestDataAttributesComponentsAffectedItems.attributeTypeMap;
  }

  public constructor() {}
}
