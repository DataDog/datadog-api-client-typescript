/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertEventAttributesLinksItem } from "./AlertEventAttributesLinksItem";
import { AlertEventAttributesPriority } from "./AlertEventAttributesPriority";
import { AlertEventAttributesStatus } from "./AlertEventAttributesStatus";
import { EventSystemAttributes } from "./EventSystemAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Alert event attributes.
 */
export class AlertEventAttributes {
  /**
   * Aggregation key of the event.
   */
  "aggregationKey"?: string;
  /**
   * JSON object of custom attributes.
   */
  "custom"?: any;
  /**
   * JSON object of event system attributes.
   */
  "evt"?: EventSystemAttributes;
  /**
   * The links related to the event.
   */
  "links"?: Array<AlertEventAttributesLinksItem>;
  /**
   * The priority of the alert.
   */
  "priority"?: AlertEventAttributesPriority;
  /**
   * Service that triggered the event.
   */
  "service"?: string;
  /**
   * The status of the alert.
   */
  "status"?: AlertEventAttributesStatus;
  /**
   * POSIX timestamp of the event.
   */
  "timestamp"?: number;
  /**
   * The title of the event.
   */
  "title"?: string;

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
    aggregationKey: {
      baseName: "aggregation_key",
      type: "string",
    },
    custom: {
      baseName: "custom",
      type: "any",
    },
    evt: {
      baseName: "evt",
      type: "EventSystemAttributes",
    },
    links: {
      baseName: "links",
      type: "Array<AlertEventAttributesLinksItem>",
    },
    priority: {
      baseName: "priority",
      type: "AlertEventAttributesPriority",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "AlertEventAttributesStatus",
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return AlertEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
